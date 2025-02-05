import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationsItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require("../../../img/bitcoinredpng.png")}
          />
          <Text style={styles.dayQuotation}>05/02/2025</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>
    </View>
  );
}
