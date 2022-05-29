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
export default function Menu({navigation}) {
  const {input, onChange, loginUser, error} = useUsers(navigation);

  return (
    <View style={styles.container}>
      <StatusBar style={"light"} backgroundColor="rgba(16,16,16,1)" />

      <Image
        style={{width: 200, height: 200}}
        source={require("../assets/gato.png")}
      />

      <Text style={{...styles.title, fontSize: 30, fontWeight: "700"}}>
        ENCERRAR AL GATO
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Ranking")}
        style={styles.inputButton}
      >
        <Text style={styles.textButton}>MEJORES PUNTAJES</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={{...styles.inputButton, marginTop: 20}}
      >
        <Text style={styles.textButton}>JUGAR</Text>
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
  textButton: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
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
