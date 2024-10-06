/* eslint-disable import/no-extraneous-dependencies */
import { View, StyleSheet } from "react-native";
import useAppStore from "src/stores/App/useAppStore";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { currencyProps } from "src/utils/dropDownOptions";

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

  const {
    localization,
    selectedCurrency,
    bitcoinPrice: bitcoinPrices,
  } = useAppStore();

  const currencyOption = currencyProps.find(
    (currencyProp) => currencyProp.currency === selectedCurrency,
  );

  const price =
    bitcoinPrices.mempool[selectedCurrency] ||
    bitcoinPrices.blockchainInfo[selectedCurrency].buy;
  const feeInCurrency = (fee / 100000000) * price;

  return (
    <View style={styles.container}>
      <View
        style={{
          maxWidth: 135,
          flexDirection: "row",
        }}
      >
        <BoxContainerWithText
          firstText={localization.t("unconfirmed")}
          secondText=""
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
          thirdText={`${currencyOption.currencySign} ${feeInCurrency.toLocaleString(
            localization.locale,
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          )}`}
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
          }}
        />
      </View>
    </View>
  );
}
