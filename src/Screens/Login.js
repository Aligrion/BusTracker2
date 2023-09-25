import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Button} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {app} from "../firebase/Config"

export default function Login({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const loginFirebase = () =>{
    const auth = getAuth();
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    const user = userCredential.user;
    navigation.navigate("ClientesScreen", {idUser: user.id})
   })
   .catch((error) => {
    setErrorLogin(true)
    const errorCode = error.code;
    const errorMessage = error.message;
    });

  }

  useEffect(() => {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    navigation.navigate("ClientesScreen", {idUser: uid})
  }
});

  },[]);

  

  const handleCadastroScreen = () => {
    navigation.navigate("CadastroScreen"); 
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>BusTracker</Text>
      <TextInput
        style={styles.input}
        placeholder={"Email"}
        value={email} 
        onChangeText={text => setEmail(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder={"Senha"}
        secureTextEntry
        value={password} 
        onChangeText={text => setPassword(text)}
      />
      {errorLogin === true
      ?
      <View styles={styles.contentAlert}>
        <MaterialCommunityIcons
         name="alert-circle"
         size={24}
         color="#bdbdbd"
        />
        <Text style={styles.textAlert}>Email ou senha incorreto</Text>
      </View>
      :
      <View/>
      }
      { email === "" || password === ""
      ?
       <TouchableOpacity
        disabled={true}
        style={styles.botaoLogin}
        onPress={loginFirebase}>
          <Text style={styles.textBotaoLogin}>Entrar</Text>
       </TouchableOpacity>
       :
       <TouchableOpacity
        style={styles.botaoLogin}
        onPress={loginFirebase}>
          <Text style={styles.textBotaoLogin}>Entrar</Text>
       </TouchableOpacity>
      }
      <Text style={styles.registration}>
        Não tem uma conta? 
        <Text style={styles.linkRegistration} onPress={handleCadastroScreen} >
           Criar conta

        </Text>
      </Text>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    color: '#39CEC9',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#DBE9E9',
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#39CEC9",
    marginBottom: 10,
    paddingHorizontal: 10,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#4d5156",
  },
  botaoLogin:{
    width: 200,
    height: 50,
    backgroundColor: '#39CEC9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

  },
  textBotaoLogin: {
    color: '#FFFFFF',
    
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,

  },
  registration:{
    marginTop: 20,
    color: '#4d5156',
  },
  linkRegistration: {
    color: "#1877f2",
    fontSize: 16,
  },
  createAccountText: {
    marginTop: 20,
    color: '#06B3B9',
    textDecorationLine: 'underline',
  },
});