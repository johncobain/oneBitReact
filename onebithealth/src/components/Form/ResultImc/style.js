import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },
  information: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shared: {
    backgroundColor: "#1877F2",
    borderRadius: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "#FFF",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default styles;
