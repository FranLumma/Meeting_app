import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    width: "100%",
    padding: 10,
  },
  scrollContainer: {
    width: "90%",
  },
  itemsContainer: {
    marginTop: 10,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  inputContainer: {
    felx: 1,
    marginTop: 30,
    marginLeft: "5%",
    width: "90%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
    elevation: 10,
  },

  button: {
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    fontSize: 16,
    elevation: 10,
    textShadowRadius: 0.5,
    textShadowColor: "#121212",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff59e9",
  },

  buttonText: {
    color: "white",
    textShadowColor: "#121212",
    textShadowRadius: 0.5,
    fontWeight: "bold",
    fontSize: 19,
  },

  buttonTextBig: { color: "#000", fontWeight: "bold", fontSize: 24 },

  textItem: { fontSize: 20 },

  textInfo: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    elevation: 10,
  },

  deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },

  commonTopBorderRadius: { borderTopLeftRadius: 40, borderTopRightRadius: 40 },
  commonBorderRadius: { borderRadius: 40 },
});
