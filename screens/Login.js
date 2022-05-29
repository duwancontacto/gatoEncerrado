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
export default function Login({navigation}) {
  const {input, onChange, loginUser, error} = useUsers(navigation);

  return (
    <View style={styles.container}>
      <StatusBar style={"light"} backgroundColor="rgba(16,16,16,1)" />

      <Pressable
        style={styles.buttonBack}
        onPress={() => {
          navigation.navigate("Menu");
        }}
      >
        <Text style={{color: "white", fontSize: 20, fontWeight: "700"}}>
          Volver
        </Text>
      </Pressable>

      <Image
        style={{width: 200, height: 200}}
        source={require("../assets/gato.png")}
      />

      <Text style={{...styles.title, fontSize: 30, fontWeight: "700"}}>
        {" "}
        ENCERRAR AL GATO{" "}
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

      <Pressable onPress={loginUser} style={styles.inputButton}>
        <Text style={{color: "white", textAlign: "center"}}>ENTRAR</Text>
      </Pressable>

      {/* <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.textRegister}>
          No posees una cuenta? Registrate.
        </Text>
      </Pressable> */}
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
  buttonBack: {
    color: "white",
    position: "absolute",
    top: 30,
    left: 30,
    fontSize: 20,
  },
});
