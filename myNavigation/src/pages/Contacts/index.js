import React from "react";
import { View, Text } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View>
      <View style={{ margin: 10 }}>
        <Text>Nome: Thiago Pinturas</Text>
        <Text>Telefone: (11) 4002-8922</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Thiago Pinturas",
              telefone: "(11) 4002-8922",
              endereco: "Rua das Flores",
              numero: "769",
              profissao: "Pintor",
              email: "thiago@pinturas.com.br",
            })
          }
          style={{ color: "blue" }}
        >
          Information...
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text>Nome: Cauã Won't</Text>
        <Text>Telefone: (71) 99999-8765</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Cauã Won't",
              telefone: "(71) 99999-8765",
              endereco: "Av. estrela nova",
              numero: "456",
              profissao: "Desenvolvedor",
              email: "caua.dev@code.com.br",
            })
          }
          style={{ color: "blue" }}
        >
          Information...
        </Text>
      </View>
    </View>
  );
}
