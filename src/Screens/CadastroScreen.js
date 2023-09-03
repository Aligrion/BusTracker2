import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({navigation}) {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleCadastro = () => {
    navigation.navigate('Login');
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
      <Button title="Criar" onPress={handleCadastro} color="#06B3B9" />
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
    fontSize: 24,
    color: '#39CEC9',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#DBE9E9',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
