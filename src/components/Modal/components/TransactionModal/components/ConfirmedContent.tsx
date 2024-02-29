import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { TransactionType } from "src/components/Modal/types";
import { formatDate } from "src/utils/formatBlockInfo";
import { I18nContext } from "src/context/LocaleProvider";

type ConfirmedContentProps = Required<
  Pick<TransactionType, "fee" | "size" | "statusTransaction">
>;

export default function ConfirmedContent(props: ConfirmedContentProps) {
  const { fee, size, statusTransaction } = props;
  const { blockHeight, blockTime } = statusTransaction;
  const i18nContext = useContext(I18nContext);

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
          firstText={`${i18nContext.t("block")} ${blockHeight}`}
          secondText=""
          width="auto"
        />

        <BoxContainerWithText
          firstText={i18nContext.t("confirmed")}
          secondText=""
          width="auto"
        />
      </View>

      <View>
        <BoxContainerWithText
          firstText={i18nContext.t("date_time")}
          secondText={`${day}/${month}/${year} ${hour}:${minutes}`}
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
