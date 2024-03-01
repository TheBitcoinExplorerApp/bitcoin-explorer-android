import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { I18nContext } from "src/context/LocaleProvider";

type NotConfirmedContentProps = {
  size: number;
  fee: number;
};

export default function NotConfirmedContent(props: NotConfirmedContentProps) {
  const { fee, size } = props;

  const i18nContext = useContext(I18nContext);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <BoxContainerWithText
          firstText={i18nContext.t("unconfirmed")}
          secondText=""
          width="auto"
        />
      </View>

      <View>
        <BoxContainerWithText
          firstText={i18nContext.t("date_time")}
          secondText={i18nContext.t("waiting_confirmation")}
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            borderBottomColor: "#D9D9D9",
          }}
        />
        <BoxContainerWithText
          firstText={i18nContext.t("size")}
          secondText={`${size} B`}
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            borderBottomColor: "#D9D9D9",
          }}
        />
        <BoxContainerWithText
          firstText={i18nContext.t("fee")}
          secondText={`${(fee / 100000000).toString()} BTC`}
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
