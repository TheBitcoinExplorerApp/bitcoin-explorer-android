/* eslint-disable import/no-extraneous-dependencies */
import { StyleSheet, View } from "react-native";
import LogoIcons from "../../assets/iconsLogo.svg";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 26,
  },
  title: {
    color: "#DF7800",
    fontSize: 20,
    fontWeight: "600",
  },
  brand: {
    color: "#DF7800",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default function Title() {
  return (
    <View style={styles.container}>
      <LogoIcons height={32} />
    </View>
  );
}
