import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {app} from "../firebase/Config"

export default function CadastroScreen({navigation}) {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleCadastro = async () => {
    try{
      const auth = getAuth(app);
      
      if (newPassword !== repeatPassword){
        console.error('As senhas não coincidem');
        return;
      }
      
      createUserWithEmailAndPassword(auth, newUsername, newPassword)
      .then((userCredential) => {
        
        const user = userCredential.user;
        
      })
    

      navigation.navigate('Login');
    } catch (error){
      console.error('Erro ao criar uma conta:', error);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BusTracker Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={newUsername}
        onChangeText={text => setNewUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Repita a Senha"
        secureTextEntry
        value={repeatPassword}
        onChangeText={text => setRepeatPassword(text)}
      />
      <TouchableOpacity onPress={handleCadastro}
      style={styles.botaoCriar}> 
      <Text style={styles.textBotaoCriar}>Criar</Text>
      </TouchableOpacity>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
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
  botaoCriar:{
    width: 200,
    height: 50,
    backgroundColor: '#39CEC9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

  },
  textBotaoCriar: {
    color: '#FFFFFF',
    
  },
});
