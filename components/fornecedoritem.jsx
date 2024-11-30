import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/CommonStyles";

export default function FornecedorItem({ data, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            borderRadius: 6,
            borderColor: "black",
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            borderBottomWidth: 1.5,
            backgroundColor: "white",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <View>
            <Image
              source={
                data.image != null
                  ? { uri: data.image }
                  : {
                      uri: "https://i.pinimg.com/736x/53/98/88/539888e3ad15885262187db602e88f5f.jpg",
                    }
              }
              style={{
                width: 136,
                height: 136,
                borderRadius: 6,
                resizeMode: "cover",
              }}
            />
          </View>
          <View
            style={{
              width: "60%",
              height: 136,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold",
                marginBottom: 1,
                textAlign: "justify",
              }}
            >
              {data.nome}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 1 }}>
              {data.endereco}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 1 }}>
              {data.contato}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 1 }}>
              {data.categoria}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            position: "relative",
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
}
