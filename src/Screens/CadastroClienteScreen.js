import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {app} from "../firebase/Config"
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";


export default function CadastroClienteScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [boleto, setboleto] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');

  const db = getFirestore(app);
  const userCollectionRef = collection(db, "Clientes");

  useEffect(() => {
    const getDados = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
    };
    getDados();
  }, []);


  function Voltar() { () => {
      
  };
  navigation.navigate("ClientesScreen");
  }

  const handleSalvar = async () => {
    const data = await addDoc(userCollectionRef, {
      nome,
      sobrenome,
      boleto,
      logradouro,
      telefone,
      cpf,
    });
    navigation.navigate("ClientesScreen");
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobrenome}
          onChangeText={text => setSobrenome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço do Boleto"
          keyboardType="numeric"
          value={boleto}
          onChangeText={text => setboleto(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Logradouro"
          value={logradouro}
          onChangeText={text => setLogradouro(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="numeric"
          value={telefone}
          onChangeText={text => setTelefone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={text => setCPF(text)}
        />
      </View>
      
      <TouchableOpacity 
     style={styles.botaoVoltar}
     onPress={Voltar}> 
     <Text style={styles.iconBotaoVoltar}> 
     <MaterialCommunityIcons name='arrow-left' size={23} color={"#39CEC9"}/>
     </Text> 
     </TouchableOpacity>  

     <TouchableOpacity 
     style={styles.saveButton}
     onPress={handleSalvar}> 
     <Text style={styles.buttonText}> 
     <MaterialCommunityIcons name='content-save' size={23} color={"#39CEC9"}/>
     </Text> 
     </TouchableOpacity>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  title: {
    fontSize: 48,
    color: '#39CEC9',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#DBE9E9',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    left: 20,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
