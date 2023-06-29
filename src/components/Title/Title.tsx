import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>B</Text>

      <Text style={styles.title}>Bitcoin Block Explorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 26,
  },
  title: {
    color: '#DF7800',
    fontSize: 20,
    fontWeight: '600',
  },
  brand: {
    color: '#DF7800',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
