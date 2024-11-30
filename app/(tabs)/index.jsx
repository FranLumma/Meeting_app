import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { useFonts } from "expo-font";

import { styles } from "@/styles/CommonStyles";
import backgorund from "../../assets/images/main-screen-bg.png";

export default function Index() {
  const [loaded, error] = useFonts({
    "Roboto-Light": require("@/assets/fonts/Roboto-Light.ttf"),
    Knewave: require("@/assets/fonts/Knewave-Regular.ttf"),
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", width: "100%" }}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <ImageBackground style={localStyles.commonImageBg} source={backgorund}>
        <View style={localStyles.titleContainer}>
          <Text style={localStyles.titleText}>
            M<Text style={{ fontSize: 47 }}>eeting</Text>
          </Text>
        </View>
        <View style={localStyles.buttonContainer}>
          <TouchableOpacity
            style={localStyles.button}
            onPress={() => router.push({ pathname: "cadastro" })}
          >
            <Text style={styles.buttonText}>Cadastrar Fornecedor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={localStyles.button}
            onPress={() => router.push({ pathname: "fornecedorlista" })}
          >
            <Text style={styles.buttonText}>Lista de Fornecedores</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const localStyles = StyleSheet.create({
  commonImageBg: {
    height: "100%",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    fontFamily: "Knewave",
    fontSize: 94,
  },
  buttonContainer: { alignItems: "center", paddingBottom: 50 },
  button: {
    width: "70%",
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
});
