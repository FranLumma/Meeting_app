import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useIsFocused } from "@react-navigation/native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "@/styles/CommonStyles";
import backgorund from "@/assets/images/bg_pattern-t.png";

import GestorDados from "@/dados/GestorDados";

export default function UserProfile() {
  const isFocused = useIsFocused();
  const gestor = new GestorDados();
  const { userId } = useLocalSearchParams();
  const [userinfo, setUserinfo] = useState([]);

  useEffect(() => {
    gestor.obterPorId(userId).then((obj) => setUserinfo(obj));
  }, [isFocused]);

  const removeData = () => {
    gestor.remover(userId).then(router.back());
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
      <StatusBar
        animated={true}
        backgroundColor="#121212"
        barStyle="light-content"
      />
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={backgorund}
          style={localStyles.commonImageBg}
          imageStyle={{ resizeMode: "repeat", opacity: 0.1 }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: userinfo.image }}
              style={[styles.commonBorderRadius, localStyles.userImage]}
            />
            <View style={{ gap: 10 }}>
              <Text
                style={[styles.textInfo, { fontSize: 35, fontWeight: "bold" }]}
              >
                {userinfo.nome}
              </Text>
              <Text style={styles.textInfo}>
                Categoria: {userinfo.categoria}
              </Text>
              <Text style={styles.textInfo}>Endereço: {userinfo.endereco}</Text>
              <Text style={styles.textInfo}>Contato: {userinfo.contato}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView
        style={{
          margin: 30,
        }}
        contentContainerStyle={localStyles.scrollContainer}
      >
        <TouchableOpacity
          style={[
            localStyles.button,
            {
              backgroundColor: "#121212",
            },
          ]}
          onPress={() => router.push({ pathname: "/fornecedorlista" })}
        >
          <Ionicons
            name="list-outline"
            size={48}
            color="white"
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            localStyles.button,
            {
              backgroundColor: "#ff59e9",
            },
          ]}
          onPress={() => router.push({ pathname: "/cadastro" })}
        >
          <Entypo
            name="new-message"
            size={48}
            color="white"
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            localStyles.button,
            {
              backgroundColor: "red",
            },
          ]}
          onPress={() => removeData()}
        >
          <Ionicons
            name="trash-sharp"
            size={48}
            color="white"
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  commonImageBg: {
    width: "100%",
    paddingVertical: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#121212",
  },
  userImage: {
    width: 236,
    height: 236,
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    elevation: 10,
  },
  scrollContainer: {
    height: "100%",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: "90%",
    padding: 10,
    backgroundColor: "#121212",
    borderRadius: 10,
  },
});
