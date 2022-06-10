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
import {
  calculatePosibilities,
  calculateWin,
  calculateBestPosibility,
} from "../utils/calculateGames.js";
import myFunc from "../numerosaleatorios.js";


export default function Game({navigation}) {
  const [casilla, setCasilla] = useState(myFunc());
  const [positionCat, setPositionCat] = useState(45);
  const [catWin, setCatWin] = useState(false);
  const [steps,setSteps]=useState(0);

  const [lastCasillaUpdated, setLastCasillaUpdated] = useState(null);

  const handleActualiza = (uid) => {
    let filterCasilla = casilla.find(
      (user) => user.id === uid && user.light === 1
    );

    if (uid === positionCat || filterCasilla || catWin) return;
    else if (calculateWin(positionCat)) return setCatWin(true);

    setLastCasillaUpdated(uid);

    const Newcasilla = casilla.map((user) =>
      user.id === uid ? {...user, light: 1} : user
    );
	setSteps(steps+1);
    setCasilla(Newcasilla);
  };
  
  const handleNew = () => {
	  
	  setCasilla(myFunc());
	  setPositionCat(45);
	  setSteps(0);
  }

  useEffect(() => {
    if (lastCasillaUpdated) {
      let posibilities = calculatePosibilities(positionCat, casilla); //Calculate posibilities
      setPositionCat(calculateBestPosibility(positionCat, posibilities)); //Set best posibility
    }
  }, [casilla]);

  return (
    <View style={styles.container}>
	
	<View style={{ 
	justifyContent: "space-between",
	flexDirection: 'row'}}
		
		>
		<Pressable
			style={styles.buttonBack}
			onPress= { () => {
				 navigation.navigate("Menu");
			}}
		>
		 <Text style={{color: "white", fontSize: 20, fontWeight: "700"}}>
            Volver
          </Text>
		  
		</Pressable>
	
		
		<Pressable
			style={styles.buttonBack}
			onPress= { () => {
				 handleNew();
			}}
		>
		 <Text style={{color: "white", fontSize: 20, fontWeight: "700"}}>
            Reiniciar
          </Text>
		  
		</Pressable>
	
		
	</View>
	
	<View style={{ marginLeft:"25%",marginTop:"10%", height:"15%", width:"50%"}}>
		<View style={{...styles.inputButton,marginTop:"10%", justifyContent:'center', alignItems:'center',height:"50%", width:"100%"}}>
		<Text style={styles.textButton}>
		{steps}
		</Text> 
		</View>
	</View>
	
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
                  top: -11,
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
	marginTop:"5%",
  },
  box: {
    backgroundColor: "#B79D7E",
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  hexagon: {
    width: "10%",
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
  textButton: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
   inputButton: {
    backgroundColor: "rgba(199,165,128,1)",
    width: "100%",
    borderRadius: 5,
    padding: 15,
    color: "white",
    textAlign: "center",
  },
  buttonBack: {
    color: "white",
    top: 20,
    left: 0,
    fontSize: 20,
  },
});
