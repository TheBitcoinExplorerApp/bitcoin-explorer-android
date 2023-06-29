import { View, Text, StyleSheet } from 'react-native';
import Title from '../Title/Title';
import Search from '../Search/Search';

type MainProps = {
  children: React.ReactNode;
};

export default function Main(props: MainProps) {
  const { children } = props;

  return (
    <View style={styles.container}>
      <Title />

      <Search />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 18,
  },
});
