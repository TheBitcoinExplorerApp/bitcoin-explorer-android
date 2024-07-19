// eslint-disable-next-line import/no-extraneous-dependencies
import { View, Text, StyleSheet } from "react-native";
import useAppDataStore from "src/context/DataProvider";
import SmallBoxInfo from "../SmallBoxInfo/SmallBoxInfo";

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
