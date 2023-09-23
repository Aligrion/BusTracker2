import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { getAuth, signOut } from "firebase/auth";
import {app} from "../firebase/Config"


// Simulação de dados de clientes (você pode substituir isso pela lógica real de obtenção de dados)
const dummyData = [
  { id: '1', name: 'Cliente 1', paymentStatus: true, boletoPrice: 100 },
  { id: '2', name: 'Cliente 2', paymentStatus: false, boletoPrice: 150 },
  // ...
];

export default function ClientesScreen({navigation}) {
  const [clientes, setClientes] = useState([]);

  function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.navigate("Login");

    }).catch((error) => {
  });
  }

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
          onPress={() => handleEditarCliente(item)}> 
        <Text style={styles.iconEditButton}> 
        <MaterialCommunityIcons name='account-edit' size={23} color={"orange"}/>
        </Text> 
        </TouchableOpacity>  
        <TouchableOpacity 
         style={styles.deleteButton}
         onPress={() => handleExcluirCliente(item.id)}> 
        <Text style={styles.iconDeleteButton}> 
        <MaterialCommunityIcons name='delete' size={23} color={"red"}/>
        </Text> 
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

     <TouchableOpacity 
     style={styles.botaoAdicionar}
     onPress={handleAdicionarCliente}> 
     <Text style={styles.textBotaoAdicionar}>Adicionar Cliente</Text> 
     </TouchableOpacity>  

     <TouchableOpacity 
     style={styles.botaoLogout}
     onPress={logout}> 
     <Text style={styles.iconBotaoLogout}> 
     <MaterialCommunityIcons name="location-exit" size={23} color={"#39CEC9"}/>
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
  title: {
    fontSize: 48,
    color: '#39CEC9',
    marginBottom: 10,
    fontWeight: 'bold',
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
    color: "#4d5156",
    flex: 1,
  },
  clienteName: {
    color: "#4d5156",
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentStatus: {
    color: "#4d5156",
    fontSize: 14,
    marginBottom: 3,
  },
  boletoPrice: {
    color: "#4d5156",
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: "#39CEC9",
  },
  editButton: {
    backgroundColor: 'orange', 
    padding: 5,
    borderRadius: 50,
    marginLeft: 30,
  },
  deleteButton: {
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDeleteButton:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  editButton: {
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#39CEC9', 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  botaoAdicionar:{
    width: 200,
    height: 50,
    backgroundColor: '#39CEC9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

  },
  textBotaoAdicionar: {
    color: '#FFFFFF',
    
  },
  botaoLogout:{
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBotaoLogout:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
