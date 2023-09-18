import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet,  View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Login from "../Screens/Login";
import ClientesScreen from "../Screens/ClientesScreen";
import CadastroScreen from "../Screens/CadastroScreen";
import VerClienteScreen from "../Screens/VerClienteScreen";
import EditarClienteScreen from "../Screens/EditarClienteScreen";
import CadastroClienteScreen from "../Screens/CadastroClienteScreen";
import BoletoScreen from "../Screens/BoletoScreen";

const Stack = createNativeStackNavigator();

function Routes() {
    const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}  options={{
              headerShown: false
            }}/>
        <Stack.Screen name="ClientesScreen" component={ClientesScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} /> 
        <Stack.Screen name="VerClienteScreen" component={VerClienteScreen} />          
        <Stack.Screen name="EditarClienteScreen" component={EditarClienteScreen} />   
        <Stack.Screen name="CadastroClienteScreen" component={CadastroClienteScreen} />
        <Stack.Screen name="BoletoScreen" component={BoletoScreen} />         
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});