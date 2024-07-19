// eslint-disable-next-line import/no-extraneous-dependencies
import { View, RefreshControl, StyleSheet, ScrollView } from "react-native";
import useAppDataStore from "src/context/DataProvider";
import Title from "../Title/Title";
import Search from "../Search/Search";
import ButtonsNavigation from "../ButtonsNavigation/ButtonsNavigation";

type MainProps = {
  children: React.ReactNode;
  navigation: unknown;
  actualScreen: "Home" | "Blocks" | "Transactions";
};

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

export default function Main(props: MainProps) {
  const { children, navigation, actualScreen } = props;
  const { isRefreshing, setIsRefreshing, setRequestScreen } = useAppDataStore();

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRequestScreen(actualScreen);
  };

  return (
    <>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
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
