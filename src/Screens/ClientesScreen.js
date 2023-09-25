import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { getAuth, signOut } from "firebase/auth";
import {app} from "../firebase/Config"
import {collection, deleteDoc, doc, getDocs, getFirestore} from "firebase/firestore";


export default function ClientesScreen({navigation, route}) {
  const [clientes, setClientes] = useState([]);

  function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.navigate("Login");

    }).catch((error) => {
  });
  }
  const db = getFirestore(app);
  const clientesCollectionRef = collection(db, "Clientes");

  useEffect(() => {
    const getDados = async () => {
      const data = await getDocs(clientesCollectionRef);
      setClientes(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
    };
    getDados();
    
  }, []);
  async function ExcluirCliente(id){
    const clientesDoc = doc(db, "Clientes", id);
    await deleteDoc(clientesDoc);
    navigation.navigate("ClientesScreen");
  };

  const handleAdicionarCliente = (cliente) => {
    navigation.navigate("CadastroClienteScreen"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes</Text>
      <div>
        <ul>
          {clientes.map(cliente =>{
            return(
              <div key={cliente.id} style={styles.clienteContainer} >
                <p style={styles.clienteName}>{cliente.nome} {cliente.sobrenome} 
                <br></br>Preço do Boleto: R${cliente.boleto} 
                <br></br>Logradouro:{cliente.logradouro}
                <br></br>Telefone: {cliente.telefone} 
                <br></br>CPF:{cliente.cpf} </p>
                <button onClick = {() => ExcluirCliente(cliente.id)}
                 style={styles.deleteButton}>Excluir Cliente</button>
              </div>
            )
          })}
        </ul>
      </div>

     <TouchableOpacity 
     style={styles.botaoAdicionar}
     onPress={handleAdicionarCliente}> 
     <Text style={styles.iconBotaoAdicionar}> 
     <MaterialCommunityIcons name="plus-circle" size={25} color={"#39CEC9"}/>
     </Text> 
     </TouchableOpacity>  

     <TouchableOpacity 
     style={styles.botaoLogout}
     onPress={logout}> 
     <Text style={styles.iconBotaoLogout}> 
     <MaterialCommunityIcons name="location-exit" size={25} color={"#39CEC9"}/>
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
    backgroundColor: '#FFFFFF',
    color: "#4d5156",
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  deleteButton: {
    bottom: 20,
    right:30,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'red',
  },
  iconDeleteButton:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconButton:{
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  botaoAdicionar:{
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  iconBotaoAdicionar: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    
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
