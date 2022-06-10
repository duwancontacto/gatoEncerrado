import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import  myFunc from './numerosaleatorios.js';

export default function App() {
 
  /*Aqui hago un State que sería para las casillas*/
 	const [casilla, setCasilla] = React.useState(myFunc());
	
/*Con este handle reemplazo el light (prendido o apagado) de la casilla
*/	
	const handleActualiza = (uid) => {
		
		const Newcasilla = casilla.map((user) => {
			if(user.id === uid){
				return{...user, 
				light: 1,
				}
			}				
			return user
		});
		setCasilla(Newcasilla);
	};

	
 return (
 
 /*Este view es el fondo del juego*/
	<View style={styles.container}>
/*Este view es el div para que yo pudiese ordenar las casillas*/
		<View style={styles.casillas}>
		
		/*Hago un map para cada casilla*/
			{casilla.map((user,index) => (
			
			/*Todavia tengo el error de key*/
			
			<View  key={user.id} style={styles.hexagon} onClick={ () => {handleActualiza(user.id)}} >
				
			/*Uso operadores ternarios para mostrar el estado de casilla usaba y casilla disponible*/	
				{ user.light == 0 ? 
				[<View key={user.id+1000} style={styles.hexagonInner} />,
				<View key={user.id+1000} style={styles.hexagonBefore}/>,
				<View key={user.id+1000} style={styles.hexagonAfter}/>]
				:
				[<View key={user.id+1000} style={styles.hexagonInner} style={styles.Able}/>,
				<View key={user.id+1000} style={styles.hexagonBefore} style={styles.Able}/>,
				<View key={user.id+10000} style={styles.hexagonAfter} style={styles.Able}/>]
				}
						
			</View>
		
		))}
		
		</View>
	
	</View>
  );
}


const styles = StyleSheet.create({
	
	body:{
		backgroundColor:'Black',
	},
  container: {
	position:'absolute',
	width: "100%",
	height:"100%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  casillas:{
	
    backgroundColor: "white",
    width: "75%",
	height: "35%",
    borderRadius: 5,
	marginTop:"25%",
	marginBottom:"25%",
	flexWrap: 'wrap',
	alignItems: 'flex-start',
	flexDirection: 'row',
	/*flex: "0 0 25%",*/
	justifyContent: "space-between",

 },
	hexagon: {

	marginTop:6.,
	marginLeft:2,
	marginRight:2,
	marginBottom:6,
    width: 20,
    height: 11,
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
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 10,
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
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderBottomWidth: 5,
    borderBottomColor: "#B79D7E",
  },
  Able:{
	borderBottomColor: "white",
	borderTopColor:"white",
	backgroundColor:"white",
  }
  
  
 
  
  
});
