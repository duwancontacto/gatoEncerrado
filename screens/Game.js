import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import myFunc from "../numerosaleatorios.js";

export default function App() {
  const [casilla, setCasilla] = useState(myFunc());
  const [positionCat, setPositionCat] = useState(45);

  const [lastCasillaUpdated, setLastCasillaUpdated] = useState(null);

  const handleActualiza = (uid) => {
    if (uid === positionCat || uid === lastCasillaUpdated) return;

    setLastCasillaUpdated(uid);
    const Newcasilla = casilla.map((user) =>
      user.id === uid ? {...user, light: 1} : user
    );
    setCasilla(Newcasilla);
  };

  const getPosibilities = () => {
    let tempPosibility = [];

    if ((positionCat - 11 / 10).toString().split(".")[0] === "1")
      tempPosibility.push(positionCat - 11);

    if (positionCat - 10 > 10) tempPosibility.push(positionCat - 10);

    if (!(positionCat - 9 / 10).toString().split(".")[0])
      tempPosibility.push(positionCat - 9);

    if ((positionCat - 1 / 10).toString().split(".")[0] === "1")
      tempPosibility.push(positionCat - 1);

    if (!(positionCat + 1 / 10).toString().split(".")[0])
      tempPosibility.push(positionCat + 1);

    if ((positionCat + 9 / 10).toString().split(".")[0] === "1")
      tempPosibility.push(positionCat + 9);

    if (positionCat + 10 < 90) tempPosibility.push(positionCat + 10);

    if (!(positionCat + 11 / 10).toString().split(".")[0])
      tempPosibility.push(positionCat + 11);

    return tempPosibility;
  };

  useEffect(() => {
    if (lastCasillaUpdated) {
      let posibilities = getPosibilities();
      let newPosition =
        posibilities[Math.floor(Math.random() * posibilities.length)];

      let validatePosition = casilla.find(
        (user) => user.id === newPosition && user.light === 1
      );

      console.log("test", validatePosition);
      if (!validatePosition) setPositionCat(newPosition);
    }
  }, [casilla]);

  return (
    <View style={styles.container}>
      <View style={styles.casillas}>
        {casilla.map((user, index) => (
          <Pressable
            key={index}
            style={styles.hexagon}
            onPress={() => {
              handleActualiza(user.id);
            }}
          >
            {user.id === positionCat && (
              <Image
                style={{
                  width: 50,
                  height: 50,
                  position: "absolute",
                  top: -20,
                  left: -5,
                  zIndex: 100,
                }}
                source={require("../assets/gato.png")}
              />
            )}
            <View
              style={{
                ...styles.box,
                backgroundColor: user.light
                  ? "rgba(199,165,128,0.3)"
                  : "rgba(199,165,128,1)",
              }}
            ></View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "Black",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  casillas: {
    position: "relative",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  box: {
    backgroundColor: "#B79D7E",
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  hexagon: {
    width: 40,
    height: 40,
    position: "relative",
  },
  hexagonInner: {
    width: "100%",
    height: "100%",
    backgroundColor: "#B79D7E",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -5,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderTopWidth: 5,
    borderTopColor: "#B79D7E",
  },
  hexagonBefore: {
    position: "absolute",
    top: -5,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderBottomWidth: 5,
    borderBottomColor: "#B79D7E",
  },
  Able: {
    borderBottomColor: "white",
    borderTopColor: "white",
    backgroundColor: "white",
  },
});
