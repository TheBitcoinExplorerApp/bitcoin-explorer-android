/* eslint-disable import/no-extraneous-dependencies */
import { View, StyleSheet } from "react-native";
import { formatDate } from "src/utils/formatBlockInfo";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import useAppStore from "src/stores/App/useAppStore";
import { TransactionType } from "src/components/Transactions/types";
import { currencyProps } from "src/utils/dropDownOptions";

type ConfirmedContentProps = Required<
  Pick<TransactionType, "fee" | "size" | "statusTransaction">
> & {
  lastBlockHeight: number;
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

export default function ConfirmedContent(props: ConfirmedContentProps) {
  const { fee, size, statusTransaction, lastBlockHeight } = props;
  const { blockHeight, blockTime } = statusTransaction;

  const {
    localization,
    selectedCurrency,
    bitcoinPrice: bitcoinPrices,
  } = useAppStore();

  const currencyOption = currencyProps.find(
    (currencyProp) => currencyProp.currency === selectedCurrency,
  );

  const { day, month, year, hour, minutes } = formatDate(blockTime);
  const confirmations = lastBlockHeight - blockHeight;

  const price =
    bitcoinPrices.mempool[selectedCurrency] ||
    bitcoinPrices.blockchainInfo[selectedCurrency].buy;
  const feeInCurrency = (fee / 100000000) * price;

  const confirmationsText =
    confirmations > 1
      ? localization.t("confirmations")
      : localization.t("confirmed");
  const confirmationNumberContent =
    confirmations > 1 ? confirmations.toString() : "";

  return (
    <View style={styles.container}>
      <View
        style={{
          maxWidth: 170,
          flexDirection: "row",
        }}
      >
        <BoxContainerWithText
          firstText={confirmationNumberContent}
          secondText={confirmationsText}
          secondTextWhite
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
          thirdText={`${currencyOption.currencySign} ${feeInCurrency.toLocaleString(
            localization.locale,
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          )}`}
        />
      </View>
    </View>
  );
}
