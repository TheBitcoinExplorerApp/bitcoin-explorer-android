// eslint-disable-next-line import/no-extraneous-dependencies
import { Text, StyleSheet, View } from "react-native";
import useAppStore from "src/stores/App/useAppStore";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";
import CustomActivityIndicator from "src/components/CustomActivityIndicator/CustomActivityIndicator";
import { CurrencyOptions } from "src/api/types";
import { currencyProps } from "src/utils/dropDownOptions";
import { useAppStoreStateTypes } from "src/stores/App/useAppStore.types";
import PrioritiesTaxValuesBox from "../components/PrioritiesTax/PrioritiesTax";

type HomeProps = {
  navigation: unknown;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: "#FFF",
    textAlign: "center",
  },
  bitcoinInfoContainer: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bitcoinPriceContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d2133",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 7,
  },
  flag: {
    fontSize: 17,
  },
  priceContainer: {
    color: "#DF7800",
    fontSize: 17,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
});

const showLoading = <CustomActivityIndicator />;

const bitcoinPriceBox = (
  selectedCurrency: CurrencyOptions,
  bitcoinPrice: useAppStoreStateTypes["bitcoinPrice"],
) => {
  const { mempool, blockchainInfo } = bitcoinPrice;
  const currencyOption = currencyProps.find(
    (currencyProp) => currencyProp.currency === selectedCurrency,
  );
  const price =
    (mempool && mempool[selectedCurrency]) ||
    (blockchainInfo && blockchainInfo[selectedCurrency].buy);

  return (
    <View style={styles.bitcoinPriceContainer}>
      <Text style={styles.flag}>{currencyOption.flag}</Text>
      <Text style={styles.priceContainer}>
        {currencyOption.currencySign} {price?.toLocaleString(selectedCurrency)}
      </Text>
    </View>
  );
};

export default function Home(props: HomeProps) {
  const { navigation } = props;
  const {
    fees,
    blocks,
    isLoading,
    localization,
    transactions,
    bitcoinPrice,
    selectedCurrency,
  } = useAppStore();
  const haveData =
    blocks?.length > 0 && fees?.length > 0 && transactions?.length > 0;

  return (
    <Main navigation={navigation} actualScreen="Home">
      {isLoading && showLoading}
      {haveData && (
        <>
          <View style={styles.bitcoinInfoContainer}>
            <Text style={styles.subtitle}>
              {localization.t("bitcoin_price")}
            </Text>
            {bitcoinPriceBox(selectedCurrency, bitcoinPrice)}
          </View>
          <Text style={styles.title}>{localization.t("transaction_fees")}</Text>

          <PrioritiesTaxValuesBox fees={fees} localization={localization} />

          <BlocksInfo
            qtdBlocksToRender={4}
            blocks={blocks}
            localization={localization}
          />

          <TransactionsInfo
            transactions={transactions}
            localization={localization}
          />
        </>
      )}
    </Main>
  );
}
