import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Title from '../Title/Title';
import Search from '../Search/Search';

type MainProps = {
  children: React.ReactNode;
};

export default function Main(props: MainProps) {
  const { children } = props;

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container} >
        <Title />

        <Search />

        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  container: {
    gap: 18,
  }
});
