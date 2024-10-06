/* eslint-disable import/no-extraneous-dependencies */
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useShallow } from "zustand/react/shallow";
import useAppStore from "src/stores/App/useAppStore";
import { ScreenOptions } from "src/stores/App/useAppStore.types";
import HouseIcon from "../../assets/house.svg";
import BlocksIcon from "../../assets/blocks.svg";
import TransactionsIcon from "../../assets/transactions.svg";
import SettingsIcon from "../../assets/settings.svg";

type ButtonsNavigationProps = {
  // # TODO: SEARCH FOR A BETTER WAY TO TYPE THIS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
  actualScreen: ScreenOptions;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111428",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    width: 90,
  },
});

export default function ButtonsNavigation(props: ButtonsNavigationProps) {
  const { navigation, actualScreen } = props;
  const localization = useAppStore(useShallow((state) => state.localization));

  const homeColor = actualScreen === "Home" ? "#DF7800" : "#D6D6D6";
  const blocksColor = actualScreen === "Blocks" ? "#DF7800" : "#D6D6D6";
  const transactionsColor =
    actualScreen === "Transactions" ? "#DF7800" : "#D6D6D6";
  const settingsColor = actualScreen === "Settings" ? "#DF7800" : "#D6D6D6";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.buttonContainer}>
          <HouseIcon style={{ color: homeColor }} />
          <Text
            style={{
              color: homeColor,
              fontSize: 12,
            }}
          >
            Home
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Blocks");
        }}
      >
        <View style={styles.buttonContainer}>
          <BlocksIcon style={{ color: blocksColor }} />
          <Text
            style={{
              color: blocksColor,
              fontSize: 12,
            }}
          >
            {localization.t("blocks")}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Transactions");
        }}
      >
        <View style={styles.buttonContainer}>
          <TransactionsIcon style={{ color: transactionsColor }} />
          <Text
            style={{
              color: transactionsColor,
              fontSize: 12,
            }}
          >
            {localization.t("transactions")}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <View style={styles.buttonContainer}>
          <SettingsIcon style={{ color: settingsColor }} />
          <Text
            style={{
              color: settingsColor,
              fontSize: 12,
            }}
          >
            {localization.t("settings")}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
