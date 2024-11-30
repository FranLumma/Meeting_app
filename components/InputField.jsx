import React from "react";
import { Text, View, TextInput } from "react-native";

import { styles } from "../styles/CommonStyles";

export default function InputField({ name, data, value, placeHolder }) {
  return (
    <View style={{ width: "100%", marginTop: 10 }}>
      {name && (
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "white",
            textShadowColor: "#121212",
            textShadowRadius: 0.5,
          }}
        >
          {name}
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        value={value}
        onChangeText={data}
      />
    </View>
  );
}
