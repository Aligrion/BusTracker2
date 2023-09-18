import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function VerClienteScreen({ navigation, route }) {
  const { cliente } = route.params;

  const handleImprimirBoleto = () => {
    // Lógica para imprimir boleto 
    // Navegar para a tela de boleto com os detalhes do cliente
    navigation.navigate('BoletoScreen');
  };

  const pagamentoStatusColor = cliente.paymentStatus ? 'green' : 'red';

  return (
    <View style={styles.container}>
      <View style={[styles.clienteContainer, { backgroundColor: '#DBE9E9' }]}>
        <Text style={styles.clienteName}>{cliente.name}</Text>
        <Text style={[styles.paymentStatus, { color: pagamentoStatusColor }]}>
          {cliente.paymentStatus ? 'Pagamento em dia' : 'Pagamento pendente'}
        </Text>
        <Text style={styles.boletoPrice}>Boleto: R$ {cliente.boletoPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.imprimirBoletoButton} onPress={handleImprimirBoleto}>
        <Text style={styles.buttonText}>Imprimir Boleto</Text>
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
  clienteContainer: {
    backgroundColor: '#DBE9E9',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  clienteName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentStatus: {
    fontSize: 18,
    marginBottom: 10,
  },
  boletoPrice: {
    fontSize: 18,
  },
  imprimirBoletoButton: {
    backgroundColor: '#39CEC9', // Cor do botão de imprimir boleto
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
