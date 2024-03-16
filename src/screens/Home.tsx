import { Text, StyleSheet, ActivityIndicator } from "react-native";
import PrioritiesTaxValuesBox from "../components/PrioritiesTax/PrioritiesTax";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";
import useAppDataStore from "src/context/DataProvider";
import blocksQuery from "src/api/blocksQuery";
import { formatBlocksData } from "src/utils/formatBlockInfo";
import { useEffect } from "react";
import transactionsQuery from "src/api/transactionsQuery";
import { formatTransactionsData } from "src/utils/formatTransactionsData";
import feesQuery from "src/api/feesQuery";
import formatFees from "src/utils/formatFees";

type HomeProps = {
  navigation: any;
};

export default function Home(props: HomeProps) {
  const { setBlocks, setTransactions, setFees, setIsLoading, isLoading, i18n } =
    useAppDataStore();
  const { blocksData, blocksIsLoading } = blocksQuery();
  const { transactionsData, transactionsIsLoading } = transactionsQuery();
  const { feesData, feesIsLoading } = feesQuery();

  useEffect(() => {
    if (blocksData) {
      const blocksDataFormatted = formatBlocksData(blocksData);
      setBlocks(blocksDataFormatted);
    }

    if (transactionsData) {
      const formattedTransactionsData =
        formatTransactionsData(transactionsData);
      setTransactions(formattedTransactionsData);
    }

    if (feesData) {
      const formattedFees = formatFees(feesData);
      setFees(formattedFees);
    }

    if (!blocksIsLoading && !transactionsIsLoading && !feesIsLoading)
      setIsLoading(false);
  }, [blocksIsLoading, transactionsIsLoading, feesIsLoading]);

  const { navigation } = props;

  const showLoading = <ActivityIndicator size="large" color="white" />;

  const content = (
    <>
      <Text style={styles.title}>{i18n.t("transaction_fees")}</Text>

      <PrioritiesTaxValuesBox />

      <BlocksInfo qtdBlocksToRender={4} />

      <TransactionsInfo />
    </>
  );

  return (
    <Main navigation={navigation} actualScreen="Home">
      {isLoading ? showLoading : content}
    </Main>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: "#FFF",
    textAlign: "center",
  },
});
