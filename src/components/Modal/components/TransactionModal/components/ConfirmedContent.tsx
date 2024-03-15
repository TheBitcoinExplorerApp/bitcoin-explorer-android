import { View, StyleSheet } from "react-native";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { TransactionType } from "src/components/Modal/types";
import useAppDataStore from "src/context/DataProvider";
import { formatDate } from "src/utils/formatBlockInfo";

type ConfirmedContentProps = Required<
  Pick<TransactionType, "fee" | "size" | "statusTransaction">
>;

export default function ConfirmedContent(props: ConfirmedContentProps) {
  const { fee, size, statusTransaction } = props;
  const { blockHeight, blockTime } = statusTransaction;
  const { i18n } = useAppDataStore();

  const { day, month, year, hour, minutes } = formatDate(blockTime);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BoxContainerWithText
          firstText={`${i18n.t("block")} ${blockHeight}`}
          secondText=""
          width="auto"
        />

        <BoxContainerWithText
          firstText={i18n.t("confirmed")}
          secondText=""
          width="auto"
        />
      </View>

      <View>
        <BoxContainerWithText
          firstText={i18n.t("date_time")}
          secondText={`${day}/${month}/${year} ${hour}:${minutes}`}
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

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
