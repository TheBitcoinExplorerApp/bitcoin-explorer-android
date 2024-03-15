import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import SmallBoxInfo from "../SmallBoxInfo/SmallBoxInfo";
import useAppDataStore from "src/context/DataProvider";
import { I18nContext } from "src/context/LocaleProvider";

export default function PrioritiesTax() {
  const { fees } = useAppDataStore();
  const i18nContext = useContext(I18nContext);

  return (
    <>
      <View style={styles.taxContainerPrioritiesTaxText}>
        <Text style={styles.taxPrioritiesTaxText}>
          {i18nContext.t("low_priority")}
        </Text>
        <Text style={styles.taxPrioritiesTaxText}>
          {i18nContext.t("medium_priority")}
        </Text>
        <Text style={styles.taxPrioritiesTaxText}>
          {i18nContext.t("high_priority")}
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
