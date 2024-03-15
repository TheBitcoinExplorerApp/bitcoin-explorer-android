import Home from "./src/screens/Home";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blocks from "src/screens/Blocks";
import Transactions from "src/screens/Transactions";
// import { DataProvider } from "src/context/DataProvider";
import useAppDataStore from "src/context/DataProvider";
import { LocaleProvider, i18n } from "src/context/LocaleProvider";
import { useEffect } from "react";
import { getBlocks, getTaxes, getTransactions } from "src/api/getData";
import { formatBlocksData } from "src/utils/formatBlockInfo";
import { formatTransactionsData } from "src/utils/formatTransactionsData";
import formatFees from "src/utils/formatFees";

const Stack = createNativeStackNavigator();

export default function App() {
  const appState = useAppDataStore();
  useEffect(() => {
    Promise.all([getBlocks(), getTransactions(), getTaxes()]).then((data) => {
      const blocksData = formatBlocksData(data[0]);
      const transactionsData = formatTransactionsData(data[1]);
      const feesData = formatFees(data[2]);

      appState.setBlocks(blocksData);
      appState.setTransactions(transactionsData);
      appState.setFees(feesData);

      appState.setIsLoading(false);
    });
  }, []);

  return (
    <LocaleProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="Blocks"
              component={Blocks}
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{
                headerShown: false,
                animation: "none",
              }}
            />
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
    </LocaleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101429",
    alignItems: "center",
    paddingTop: 22.5,
    paddingHorizontal: 24,
  },
});
