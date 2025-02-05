import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.CurrentPrice}>$ 54423.355</Text>
      <Text style={styles.textPrice}>Última Cotação</Text>
    </View>
  );
}
