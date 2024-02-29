import Home from "./src/screens/Home";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blocks from "src/screens/Blocks";
import Transactions from "src/screens/Transactions";
import { DataProvider } from "src/context/DataProvider";
import { LocaleProvider, i18n } from "src/context/LocaleProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LocaleProvider>
      <DataProvider>
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
      </DataProvider>
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
