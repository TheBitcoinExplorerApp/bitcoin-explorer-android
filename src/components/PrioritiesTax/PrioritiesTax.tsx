import { View, Text, StyleSheet } from "react-native";
import SmallBoxInfo from "../SmallBoxInfo/SmallBoxInfo";
import useAppDataStore from "src/context/DataProvider";

export default function PrioritiesTax() {
  const { fees, i18n } = useAppDataStore();

  return (
    <>
      <View style={styles.taxContainerPrioritiesTaxText}>
        <Text style={styles.taxPrioritiesTaxText}>
          {i18n.t("low_priority")}
        </Text>
        <Text style={styles.taxPrioritiesTaxText}>
          {i18n.t("medium_priority")}
        </Text>
        <Text style={styles.taxPrioritiesTaxText}>
          {i18n.t("high_priority")}
        </Text>
      </View>
      <SmallBoxInfo boxesInfos={fees} />
    </>
  );
}

const styles = StyleSheet.create({
  taxContainerPrioritiesTaxText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1d2133",
    padding: 16,
    borderRadius: 8,
  },
  taxPrioritiesTaxText: {
    color: "#FFF",
    fontSize: 12,
  },
});
