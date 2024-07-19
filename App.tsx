// eslint-disable-next-line import/no-extraneous-dependencies
import "react-native-get-random-values";
import Blocks from "src/screens/Blocks";
import Transactions from "src/screens/Transactions";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QueriesContainer from "src/context/QueriesContainer";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();
export const AppQueryApiDataProvider = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={AppQueryApiDataProvider}>
      <QueriesContainer>
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
      </QueriesContainer>
    </QueryClientProvider>
  );
}
