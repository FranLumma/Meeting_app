import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import FornecedorItem from "../../components/fornecedoritem";

import GestorDados from "@/dados/GestorDados";
import { useIsFocused } from "@react-navigation/native";
import InputField from "@/components/InputField";
import { styles } from "@/styles/CommonStyles";

export default function FornecedorLista() {
  const gestor = new GestorDados();
  const isFocused = useIsFocused();
  const [fornecedores, setFornecedores] = useState([]);
  const [pesquisa, setPesquisa] = useState();

  useEffect(() => {
    gestor.obterTodos().then((objs) => {
      if (pesquisa != null) {
        const filteredData = objs.filter((item) => {
          const itemData = item.categoria.toUpperCase();
          const itemFilter = pesquisa.toUpperCase();
          return itemData.indexOf(itemFilter) > -1;
        });
        setFornecedores(filteredData);
        setPesquisa(pesquisa);
      } else {
        setFornecedores(objs);
      }
    });
  }, [isFocused, pesquisa]);

  const myKeyExtractor = (item) => {
    return item._id.toString();
  };

  const handleNavigation = (id) => {
    router.push({ pathname: "(user)/userprofile", params: { userId: id } });
  };

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/c4/d3/26/c4d3262a624419eef5e10b12b8066015.jpg",
        }}
        style={localStyles.commonImageBg}
        imageStyle={{ opacity: 0.25 }}
      />
      <View style={localStyles.titleContainer}>
        <Text style={localStyles.titleText}>Fornecedores</Text>
        <InputField
          placeHolder="Pesquisa por categoria"
          value={pesquisa}
          data={(text) => setPesquisa(text)}
        />
      </View>
      <View style={[styles.commonTopBorderRadius, localStyles.listContainer]}>
        <FlatList
          contentContainerStyle={localStyles.listContentContainer}
          data={fornecedores}
          keyExtractor={myKeyExtractor}
          renderItem={({ item }) => (
            <FornecedorItem
              data={item}
              onPress={() => handleNavigation(item._id)}
              onDelete={() => removeData(item._id)}
            />
          )}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  commonImageBg: {
    width: "100%",
    height: "60%",
    position: "absolute",
    backgroundColor: "black",
  },
  titleContainer: { padding: 15, marginTop: 25, height: 180 },
  titleText: { color: "white", fontSize: 28, fontWeight: "bold" },
  listContainer: {
    paddingTop: 15,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  listContentContainer: {
    marginTop: 10,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 15,
  },
});
