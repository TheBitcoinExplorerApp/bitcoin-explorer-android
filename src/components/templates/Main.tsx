import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Title from "../Title/Title";
import Search from "../Search/Search";
import ButtonsNavigation from "../ButtonsNavigation/ButtonsNavigation";

type MainProps = {
  children: React.ReactNode;
  navigation: any;
  actualScreen: "Home" | "Blocks" | "Transactions";
};

export default function Main(props: MainProps) {
  const { children, navigation, actualScreen } = props;

  return (
    <>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Title />

          <Search />

          {children}
        </View>
      </ScrollView>
      <ButtonsNavigation navigation={navigation} actualScreen={actualScreen} />
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
  },
  container: {
    gap: 18,
    flex: 1,
    backgroundColor: "#101429",
    paddingTop: 22.5,
    paddingHorizontal: 24,
  },
  buttonsContainer: {},
});
