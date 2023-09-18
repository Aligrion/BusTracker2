import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login({navigation}){
 /* const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); */

  const handleLogin = () => {
    navigation.navigate("ClientesScreen"); 
  };
  const handleCadastroScreen = () => {
    navigation.navigate("CadastroScreen"); 
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>BusTracker</Text>
      <Input
        rotulo="" placeholder={"Usuario"}
       /* value={username} 
        onChangeText={text => setUsername(text)}*/
      />
      
      <Input
        rotulo="" placeholder={"Senha"} 
        /* value={password} 
        onChangeText={text => setPassword(text)} */
      />
      <Button titulo="Entrar" onPress={handleLogin} />
    
      <Button titulo="Não tem usuário? Clique aqui para criar uma conta" onPress={handleCadastroScreen} />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    /*alignItems: 'center',*/
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#39CEC9',
    marginBottom: 20,
    textAlign: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  createAccountText: {
    marginTop: 20,
    color: '#06B3B9',
    textDecorationLine: 'underline',
  },
});