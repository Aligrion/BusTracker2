import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BoletoScreen({ navigation, route }) {
  const { cliente } = route.params;

  const handleSalvarComoPDF = () => {
    // Lógica para salvar o boleto como PDF 
  };

  const handleImprimirBoleto = () => {
    // Lógica para imprimir o boleto 
  };

  return (
    <View style={styles.container}>
      <View style={styles.boletoContainer}>
        {/* Renderizar a pré-visualização do boleto */}
        <Text style={styles.boletoText}>Pré-visualização do Boleto para {cliente.name}</Text>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSalvarComoPDF}>
        <Text style={styles.buttonText}>Salvar como PDF</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.printButton} onPress={handleImprimirBoleto}>
        <Text style={styles.buttonText}>Imprimir</Text>
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
  boletoContainer: {
    backgroundColor: '#DBE9E9',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  boletoText: {
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: '#39CEC9', 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  printButton: {
    backgroundColor: '#39CEC9', 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
