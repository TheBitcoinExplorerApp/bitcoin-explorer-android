/* eslint-disable import/no-extraneous-dependencies */
import { useShallow } from "zustand/react/shallow";
import { View, StyleSheet } from "react-native";
import { formatDate } from "src/utils/formatBlockInfo";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import useAppStore from "src/stores/App/useAppStore";
import { TransactionType } from "src/components/Transactions/types";

type ConfirmedContentProps = Required<
  Pick<TransactionType, "fee" | "size" | "statusTransaction">
>;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

export default function ConfirmedContent(props: ConfirmedContentProps) {
  const { fee, size, statusTransaction } = props;
  const { blockHeight, blockTime } = statusTransaction;
  const localization = useAppStore(useShallow((state) => state.localization));

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
          firstText={`${localization.t("block")} ${blockHeight}`}
          secondText=""
          width="auto"
        />

        <BoxContainerWithText
          firstText={localization.t("confirmed")}
          secondText=""
          width="auto"
        />
      </View>

      <View>
        <BoxContainerWithText
          firstText={localization.t("date_time")}
          secondText={`${day}/${month}/${year} ${hour}:${minutes}`}
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
