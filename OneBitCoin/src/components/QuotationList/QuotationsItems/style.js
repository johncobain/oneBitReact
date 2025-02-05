import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContent: {
    width: "90%",
    height: "auto",
    backgroundColor: "#000",
    marginHorizontal: "auto",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  contextLeft: {
    width: "36%",
    alignItems: "flex-start",
  },
  boxLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoBitcoin: {
    width: 35,
    height: 35,
    marginLeft: 3,
  },
  dayQuotation: {
    fontSize: 16,
    paddingLeft: 5,
    color: "#FFF",
    fontWeight: "bold",
  },
  contextRight: {
    width: "60%",
    alignItems: "flex-end",
  },
  price: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
