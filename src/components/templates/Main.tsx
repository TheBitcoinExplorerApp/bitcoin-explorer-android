/* eslint-disable import/no-extraneous-dependencies */
import { View, RefreshControl, StyleSheet, ScrollView } from "react-native";
import { ScreenOptions } from "src/stores/App/useAppStore.types";
import useTransactionsQuery from "src/api/transactionsQuery";
import useAppStore from "src/stores/App/useAppStore";
import useBlocksQuery from "src/api/blocksQuery";
import useFeesQuery from "src/api/feesQuery";
import Title from "../Title/Title";
import Search from "../Search/Search";
import ButtonsNavigation from "../ButtonsNavigation/ButtonsNavigation";

type MainProps = {
  navigation: unknown;
  children: React.ReactNode;
  actualScreen: ScreenOptions;
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

  const { isRefreshing, setIsRefreshing } = useAppStore();
  const { refetchFees } = useFeesQuery();
  const { refetchBlocks } = useBlocksQuery();
  const { refetchTransactions } = useTransactionsQuery();

  const handleRefresh = async () => {
    setIsRefreshing(true);
    if (actualScreen === "Home") {
      await refetchFees();
      await refetchBlocks();
      await refetchTransactions();

      setIsRefreshing(false);
    }
    if (actualScreen === "Blocks") {
      await refetchBlocks();

      setIsRefreshing(false);
    }
    if (actualScreen === "Transactions") {
      await refetchTransactions();

      setIsRefreshing(false);
    }
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
