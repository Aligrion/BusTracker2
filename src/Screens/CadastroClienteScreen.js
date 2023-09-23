import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function CadastroClienteScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [cpf, setCPF] = useState('');

  function Voltar() { () => {
      
  };
  navigation.navigate("ClientesScreen");
  }

  const handleSalvar = () => {
    // Lógica para salvar o cliente (você precisa implementar isso)
    const novoCliente = {
      id: Math.random().toString(), // Gere um ID único (pode ser mais complexo em uma aplicação real)
      nome,
      sobrenome,
      frequencia: parseInt(frequencia), // Converta para número
      cpf: cpf.replace(/\D/g, ''), // Remova todos os caracteres não numéricos do CPF
    };

    // Aqui você pode adicionar o novoCliente à sua fonte de dados (array, banco de dados, etc.)

    // Depois de salvar, volte para a tela de listagem
    navigation.navigate('ClientesScreen');
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
          placeholder="Frequência por semana"
          keyboardType="numeric"
          value={frequencia}
          onChangeText={text => setFrequencia(text)}
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

     <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
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
    width: 200,
    height: 50,
    backgroundColor: '#39CEC9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
