import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {app} from "../firebase/Config"

export default function CadastroScreen({navigation}) {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorSenha, setErrorSenha] = useState('');

  function Voltar() { () => {
      
  };
  navigation.navigate("Login");
  }

  const handleCadastro = async () => {
    try{
      const auth = getAuth(app);
      
      if (newPassword !== repeatPassword){
        setErrorSenha(true)
        const errorCode = error.code;
        const errorMessage = error.message;
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
        placeholder="Email"
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
       {errorSenha === true
      ?
      <View styles={styles.contentAlert}>
        <MaterialCommunityIcons
         name="alert-circle"
         size={24}
         color="#bdbdbd"
        />
        <Text style={styles.textAlert}>Senhas não coincidem, repita novamente</Text>
      </View>
      :
      <View/>
      }
      { newUsername === "" || newPassword === "" || repeatPassword === "" 
      ?
       <TouchableOpacity
        disabled={true}
        style={styles.botaoCriar}
        onPress={handleCadastro}>
          <Text style={styles.textBotaoCriar}>Criar</Text>
       </TouchableOpacity>
       :
       <TouchableOpacity
        style={styles.botaoCriar}
        onPress={handleCadastro}>
          <Text style={styles.textBotaoCriar}>Criar</Text>
       </TouchableOpacity>
      }  
      <TouchableOpacity 
     style={styles.botaoVoltar}
     onPress={(Voltar)}> 
     <Text style={styles.iconBotaoVoltar}> 
     <MaterialCommunityIcons name='arrow-left' size={23} color={"#39CEC9"}/>
     </Text> 
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
  botaoVoltar: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 20,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

  },
  iconBotaoVoltar: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
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
