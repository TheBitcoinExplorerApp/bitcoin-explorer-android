import Home from "./src/screens/Home";
import Blocks from "src/screens/Blocks";
import Transactions from "src/screens/Transactions";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export const AppQueryApiDataProvider = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={AppQueryApiDataProvider}>
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
    </QueryClientProvider>
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
