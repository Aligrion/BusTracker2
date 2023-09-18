import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button';

// Simulação de dados de clientes (você pode substituir isso pela lógica real de obtenção de dados)
const dummyData = [
  { id: '1', name: 'Cliente 1', paymentStatus: true, boletoPrice: 100 },
  { id: '2', name: 'Cliente 2', paymentStatus: false, boletoPrice: 150 },
  // ...
];

export default function ClientesScreen({navigation}) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Aqui você poderia buscar os dados reais dos clientes de algum serviço ou armazenamento
    setClientes(dummyData);
  }, []);

  const handleVerDetalhes = (cliente) => {
    navigation.navigate("VerClienteScreen"); 
  };

  const handleEditarCliente = (cliente) => {
    navigation.navigate("EditarClienteScreen"); 
  };

  const handleExcluirCliente = (clienteId) => {
    // Lógica para excluir o cliente (você precisa implementar isso)
    // Atualize a lista de clientes após a exclusão
    setClientes(clientes.filter(cliente => cliente.id !== clienteId));
  };

  const handleAdicionarCliente = (cliente) => {
    navigation.navigate("CadastroClienteScreen"); 
  };

  const renderCliente = ({ item }) => (
    <TouchableOpacity style={styles.clienteContainer} onPress={() => handleVerDetalhes(item)}>
      <View style={styles.clienteInfo}>
        <Text style={styles.clienteName}>{item.name}</Text>
        <Text style={styles.paymentStatus}>
          {item.paymentStatus ? 'Pagamento em dia' : 'Pagamento pendente'}
        </Text>
        <Text style={styles.boletoPrice}>Boleto: R$ {item.boletoPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditarCliente(item)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleExcluirCliente(item.id)}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes</Text>
      <FlatList
        data={clientes}
        keyExtractor={item => item.id}
        renderItem={renderCliente}
        style={styles.list}
      />

     <Button titulo="Adicionar Cliente" onPress={handleAdicionarCliente} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06B3B9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    marginTop: 10,
  },
  clienteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DBE9E9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  clienteInfo: {
    flex: 1,
  },
  clienteName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentStatus: {
    fontSize: 14,
    marginBottom: 3,
  },
  boletoPrice: {
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: 'orange', 
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#39CEC9', 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
});
