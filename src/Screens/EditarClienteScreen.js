import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function EditarClienteScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [cpf, setCPF] = useState('');

  useEffect(() => {
    // Obtém os dados do cliente da rota e preenche os campos
    const { cliente } = route.params;
    setNome(cliente.nome);
    setSobrenome(cliente.sobrenome);
    setFrequencia(cliente.frequencia.toString());
    setCPF(cliente.cpf);
  }, []);

  const handleSalvarEdicao = () => {
    // Lógica para salvar a edição do cliente 
    const clienteEditado = {
      ...route.params.cliente,
      nome,
      sobrenome,
      frequencia: parseInt(frequencia),
      cpf: cpf.replace(/\D/g, ''),
    };

    //atualizar os dados do cliente na sua fonte de dados

    // Voltar para a tela de listagem
    navigation.navigate('Clientes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Cliente</Text>
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
      <TouchableOpacity style={styles.saveButton} onPress={handleSalvarEdicao}>
        <Text style={styles.buttonText}>Salvar Edição</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06B3B9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
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
    backgroundColor: '#39CEC9', 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
