import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet,  View } from "react-native";
import Login from "./src/Screens/Login";
import ClientesScreen from "./src/Screens/ClientesScreen";
import CadastroScreen from "./src/Screens/CadastroScreen";
import VerClienteScreen from "./src/Screens/VerClienteScreen";
import EditarClienteScreen from "./src/Screens/EditarClienteScreen";
import CadastroClienteScreen from "./src/Screens/CadastroClienteScreen";
import BoletoScreen from "./src/Screens/BoletoScreen";

const Stack = createNativeStackNavigator();

export default function navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ClientesScreen" component={ClientesScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} /> 
        <Stack.Screen name="VerClienteScreen" component={VerClienteScreen} />          
        <Stack.Screen name="EditarClienteScreen" component={EditarClienteScreen} />   
        <Stack.Screen name="CadastroClienteScreen" component={CadastroClienteScreen} />
        <Stack.Screen name="BoletoScreen" component={BoletoScreen} />         
      </Stack.Navigator>
    </NavigationContainer>
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