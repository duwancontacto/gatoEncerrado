import React from "react";
import {StatusBar} from "expo-status-bar";
import {
  View,
  Button,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";

import useUsers from "../hooks/useUsers";

export default function Register({navigation}) {
  const {input, onChange, registerUser, error} = useUsers(navigation);

  return (
    <View
      style={styles.container}
      onPress={() => {
        navigation.push("Menu");
      }}
    >
      <StatusBar style={"light"} backgroundColor="rgba(16,16,16,1)" />

      <Image
        style={{width: 200, height: 200}}
        source={require("../assets/gato.png")}
      />

      <Text style={{...styles.title, fontSize: 30, fontWeight: "700"}}>
        REGISTRATE
      </Text>

      <TextInput
        onChangeText={onChange}
        placeholderTextColor={error ? "rgba(255,75,100,1)" : "#e0e0e0"}
        placeholder={error || "INGRESA TU USUARIO"}
        style={{
          ...styles.input,
          borderWidth: 1,
          borderColor: error ? "rgba(255,75,100,1)" : "rgba(51,51,51,1)",
        }}
        value={input}
      />

      <Pressable onPress={registerUser} style={styles.inputButton}>
        <Text style={{color: "white", textAlign: "center"}}>REGISTRAR</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textRegister}>tienes una cuenta? Ingresa.</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(16,16,16,1)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    color: "white",
    marginVertical: 40,
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgba(51,51,51,1)",
    width: "100%",
    borderRadius: 5,
    padding: 15,
    color: "white",
    marginBottom: 20,
  },
  inputButton: {
    backgroundColor: "rgba(199,165,128,1)",
    width: "100%",
    borderRadius: 5,
    padding: 15,
    color: "white",
    textAlign: "center",
  },
  textRegister: {
    width: "100%",
    borderRadius: 5,
    padding: 10,
    color: "white",
    marginVertical: 10,
  },
  textError: {
    color: "red",
    textAlign: "left",
    width: "100%",
  },
});
