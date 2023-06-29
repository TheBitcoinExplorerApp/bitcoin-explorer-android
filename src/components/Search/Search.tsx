import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar"
        style={styles.input}
        placeholderTextColor="#8d8d9a"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: '#1d2133',
    borderRadius: 5,
    padding: 12,
    width: '100%',
    fontSize: 18,
    color: '#FFF',
  },
});
