import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GeoARViewer</Text>
      <Text style={styles.subtitle}>Build base funcionando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: '#555'
  }
});
