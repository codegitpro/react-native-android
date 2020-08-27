import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const FormButton = ({ onPress, title, size, backgroundColor, color, icon }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.formButton,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6,
      },
      backgroundColor && { backgroundColor },
    ]}
  >
    <Text
      style={[
        styles.formButtonText,
        size === "sm" && { fontSize: 14 },
        color && { color },
      ]}
    >
      {icon}
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // ...
  formButton: {
    width: 210,
    marginBottom: 15,
    // boxShadow: "0px 5px 20px rgba(114, 90, 29, 0.15)",
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
  },
  formButtonText: {
    fontFamily: "Arial Hebrew Scholar",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    color: "#585A5C",
    textAlign: "center",
    margin: 10,
  },
});

export default FormButton;
