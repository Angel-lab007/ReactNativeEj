import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = () => {
  const [texto, setTexto] = useState('Hola mundo!') //texto es el valor del estado
  const actualizaTexto = () => {
    setTexto('chao mundo :(')
  }
  return (
    <Text onPress={actualizaTexto}>{texto}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
