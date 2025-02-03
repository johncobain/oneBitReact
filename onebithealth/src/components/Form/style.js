import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
  },
  form: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
    marginTop: 20,
    padding: 10,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
    height: 40,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#FFF",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "90%",
    height: "50%",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
  },
  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 26,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  textResultImcItem: {
    fontSize: 16,
  },
});

export default styles;
