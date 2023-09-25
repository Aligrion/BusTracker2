import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet,  View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Login from "../Screens/Login";
import ClientesScreen from "../Screens/ClientesScreen";
import CadastroScreen from "../Screens/CadastroScreen";
import CadastroClienteScreen from "../Screens/CadastroClienteScreen";

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
        <Stack.Screen name="ClientesScreen" component={ClientesScreen} options={{
              headerShown: false
            }}/>
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} options={{
              headerShown: false
            }}/> 
        <Stack.Screen name="CadastroClienteScreen" component={CadastroClienteScreen}  options={{
              headerShown: false
            }} />
       
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