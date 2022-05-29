import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Menu from "./screens/Menu";
import Game from "./screens/Game";
import Results from "./screens/Results";
import Ranking from "./screens/Ranking";
import {SafeAreaView} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "rgba(16,16,16,1)"}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Ranking" component={Ranking} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
