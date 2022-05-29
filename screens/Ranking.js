import React from "react";
import {View, StyleSheet, Text, ScrollView, Pressable} from "react-native";
export default function Ranking({navigation}) {
  const [ranking, setRanking] = React.useState([
    {name: "Juan", score: 30},
    {name: "Luis", score: 20},
    {name: "Pedro", score: 10},
    {name: "Matias", score: 5},
    {name: "Gabriel", score: 3},
    {name: "Miguel", score: 2},
    {name: "Maria", score: 1},
    {name: "Valentin", score: 0},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView style={{width: "100%"}}>
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

        <Text style={styles.title}>TABLA DE PUNTAJES</Text>

        {ranking.map((user, index) => (
          <View style={styles.containerCard}>
            <Text style={styles.positionRanking}>{index}</Text>
            <Text style={styles.nameRanking}>{user.name}</Text>
            <Text style={styles.scoreRanking}>{user.score} pts</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBack: {
    color: "white",
    position: "absolute",
    top: 20,
    left: 0,
    fontSize: 20,
  },
  positionRanking: {
    fontSize: 30,
    color: "white",
    borderRightWidth: 2,
    borderRightColor: "rgba(199,165,128,1)",
    paddingRight: 20,
  },
  scoreRanking: {
    fontSize: 20,
    color: "white",
    paddingRight: 20,
    position: "absolute",
    right: 0,
  },
  nameRanking: {
    paddingLeft: 20,
    fontSize: 20,
    color: "#e0e0e0",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(16,16,16,1)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  containerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(51,51,51,1)",
    width: "100%",
    borderRadius: 5,
    padding: 15,
    color: "white",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: "white",
    marginVertical: 40,
    marginTop: 100,
    textAlign: "center",
    fontWeight: "bold",
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
