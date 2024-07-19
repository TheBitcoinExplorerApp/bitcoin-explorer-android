// eslint-disable-next-line import/no-extraneous-dependencies
import { View, StyleSheet } from "react-native";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import useAppDataStore from "src/context/DataProvider";

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
  const { i18n } = useAppDataStore();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <BoxContainerWithText
          firstText={i18n.t("unconfirmed")}
          secondText=""
          width="auto"
        />
      </View>

      <View>
        <BoxContainerWithText
          firstText={i18n.t("date_time")}
          secondText={i18n.t("waiting_confirmation")}
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            borderBottomColor: "#D9D9D9",
          }}
        />
        <BoxContainerWithText
          firstText={i18n.t("size")}
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
          firstText={i18n.t("fee")}
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
