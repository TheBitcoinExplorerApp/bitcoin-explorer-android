/* eslint-disable import/no-extraneous-dependencies */
import { View, StyleSheet } from "react-native";
import { useShallow } from "zustand/react/shallow";
import useAppStore from "src/stores/App/useAppStore";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";

type NotConfirmedContentProps = {
  size: number;
  fee: number;
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

export default function NotConfirmedContent(props: NotConfirmedContentProps) {
  const { fee, size } = props;
  const localization = useAppStore(useShallow((state) => state.localization));

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <BoxContainerWithText
          firstText={localization.t("unconfirmed")}
          secondText=""
          width="auto"
        />
      </View>

      <View>
        <BoxContainerWithText
          firstText={localization.t("date_time")}
          secondText={localization.t("waiting_confirmation")}
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            borderBottomColor: "#D9D9D9",
          }}
        />
        <BoxContainerWithText
          firstText={localization.t("size")}
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
          firstText={localization.t("fee")}
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
