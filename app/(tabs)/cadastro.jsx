import InputField from "@/components/InputField";
import { Fornecedor } from "@/dados/Fornecedor";
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";

import GestorDados from "../../dados/GestorDados";

import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

import { styles } from "../../styles/CommonStyles";
import backgorund from "../../assets/images/register-screen-bg.png";

export default function cadastro() {
  const gestor = new GestorDados();

  const [image, setImage] = useState();
  const [nome, setNome] = useState();
  const [endereco, setEndereco] = useState();
  const [contato, setContato] = useState();
  const [categoria, setCategoria] = useState();

  const handleNewFornecedorData = () => {
    let novoFornecedor = new Fornecedor(
      uuid.v4(),
      image,
      nome,
      endereco,
      contato,
      categoria
    );

    gestor
      .adicionar(novoFornecedor)
      .then(
        setImage(),
        setNome(),
        setEndereco(),
        setContato(),
        setCategoria(),
        router.push({ pathname: "fornecedorlista" })
      );
  };

  const pickImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(res);
    if (!res.canceled) {
      setImage(res.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
      <ImageBackground
        style={{
          height: "100%",
        }}
        source={backgorund}
      >
        <View style={[styles.inputContainer, { gap: 10 }]}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              style={[
                localStyles.imageSelect,
                image != null ? { tintColor: nome } : { tintColor: "white" },
              ]}
              source={
                image != null
                  ? { uri: image }
                  : {
                      uri: "https://cdn-icons-png.flaticon.com/512/1004/1004759.png",
                    }
              }
            />
          </TouchableOpacity>
          <InputField
            name="Nome"
            value={nome}
            data={setNome}
            placeHolder="Ex. Gabriela Novak"
          />
          <InputField
            name="Endereço"
            value={endereco}
            data={setEndereco}
            placeHolder="R. Barão do Rio Branco, 45 – Centro – Curitiba – PR
CEP 80010-180"
          />
          <InputField
            name="Contato"
            value={contato}
            data={setContato}
            placeHolder="(41) 3564-4641"
          />
          <InputField
            name="Categoria"
            value={categoria}
            data={setCategoria}
            placeHolder="Fini"
          />
          <TouchableOpacity
            onPress={handleNewFornecedorData}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  imageSelect: {
    width: 160,
    height: 160,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#ff59e9",
    resizeMode: "center",
  },
});
