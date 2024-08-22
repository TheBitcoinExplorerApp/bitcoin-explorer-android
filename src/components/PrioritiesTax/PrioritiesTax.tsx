/* eslint-disable import/no-extraneous-dependencies */
import { I18n } from "i18n-js";
import { View, Text, StyleSheet } from "react-native";
import SmallBoxInfo, { SmallBox } from "../SmallBoxInfo/SmallBoxInfo";

type PrioritiesTaxProps = {
  fees: SmallBox[];
  localization: I18n;
};

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

export default function PrioritiesTax(props: PrioritiesTaxProps) {
  const { fees, localization } = props;

  return (
    <>
      <View style={styles.taxContainerPrioritiesTaxText}>
        <Text style={styles.taxPrioritiesTaxText}>
          {localization.t("low_priority")}
        </Text>
        <Text style={styles.taxPrioritiesTaxText}>
          {localization.t("medium_priority")}
        </Text>
        <Text style={styles.taxPrioritiesTaxText}>
          {localization.t("high_priority")}
        </Text>
      </View>
      <SmallBoxInfo boxesInfos={fees} />
    </>
  );
}
