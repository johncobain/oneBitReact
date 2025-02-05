import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";
import QuotationList from "./src/components/QuotationList";
import QuotationsItems from "./src/components/QuotationList/QuotationsItems";

function convertTimestamp(timestamp, timezone) {
  // Calcula o deslocamento de GMT-03:00 em milissegundos
  const offset = -timezone * 60 * 60 * 1000; // -3 horas em milissegundos

  // Adiciona o deslocamento ao timestamp original para obter o timestamp em GMT
  const gmtTimestamp = timestamp - offset;

  return gmtTimestamp;
}

function url(qtdDays) {
  const date = new Date();
  let endDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0
  ).getTime();
  endDate = convertTimestamp(endDate, -3);
  const startDate = endDate - (qtdDays - 1) * 86400000;
  return `https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=${startDate}&end=${endDate}`;
}

async function getListCoins(url = "") {
  try {
    let list = [];
    if (url !== "") {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const json = await response.json();

      list = json.data.map((item) => {
        const date = item.date.split("T")[0];
        let price = item.priceUsd;
        price = parseFloat(price).toFixed(2);

        const formattedDate = date.split("-").reverse().join("/");

        return {
          data: formattedDate,
          valor: price,
        };
      });
    }
    const responseToday = await fetch(
      "https://api.coincap.io/v2/assets/bitcoin/"
    );

    if (!responseToday.ok) {
      throw new Error(`Erro na requisição: ${responseToday.status}`);
    }

    const jsonToday = await responseToday.json();

    let priceToday = jsonToday.data.priceUsd;
    priceToday = parseFloat(priceToday).toFixed(2);
    const dateToday = new Date().toLocaleDateString("pt-BR");

    list.push({
      data: dateToday,
      valor: priceToday,
    });
    return list;
  } catch (error) {
    console.error("Erro ao obter ou processar os dados: ", error);
    return [];
  }
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(false);

  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data.reverse());
      setCoinsGraphicList(data.map((item) => item.valor));
    });
    if (updateData) {
      setUpdateData(false);
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f50d41" barStyle="dark-content" />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
