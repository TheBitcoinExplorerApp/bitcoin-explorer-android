import Home from './src/pages/Home';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101429',
    alignItems: 'center',
    paddingTop: 22.5,
    paddingHorizontal: 24,
  },
});
