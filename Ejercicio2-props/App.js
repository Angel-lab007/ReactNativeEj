import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  const {texto} =props
  return (
    <Text>{texto}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto texto={'Hola mundo'}/>
      <Texto texto={'chao mundo'}/>
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
