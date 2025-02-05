import React from "react";
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
  const startDate = endDate - qtdDays * 86400000;
  return `https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=${startDate}&end=${endDate}`;
}

async function getListCoins(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const json = await response.json();

    const reversedList = json.data
      .map((item) => {
        const date = item.date.split("T")[0];

        const formattedDate = date.split("-").reverse().join("/");

        return {
          data: formattedDate,
          valor: item.priceUsd,
        };
      })
      .reverse();

    return reversedList;
  } catch (error) {
    console.error("Erro ao obter ou processar os dados: ", error);
    return [];
  }
}
async function getPriceCoinsGraphic(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const json = await response.json();

    const reversedList = json.data
      .map((item) => {
        item.priceUsd;
      })
      .reverse();

    return reversedList;
  } catch (error) {
    console.error("Erro ao obter ou processar os dados: ", error);
    return [];
  }
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f50d41" barStyle="dark-content" />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      <QuotationsItems />
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
