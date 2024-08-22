// eslint-disable-next-line import/no-extraneous-dependencies
import { Text, StyleSheet } from "react-native";
import useAppStore from "src/stores/App/useAppStore";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";
import CustomActivityIndicator from "src/components/CustomActivityIndicator/CustomActivityIndicator";
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
});

const showLoading = <CustomActivityIndicator />;

export default function Home(props: HomeProps) {
  const { navigation } = props;
  const { isLoading, localization, blocks, fees, transactions } = useAppStore();
  const haveData =
    blocks?.length > 0 && fees?.length > 0 && transactions?.length > 0;

  return (
    <Main navigation={navigation} actualScreen="Home">
      {isLoading && showLoading}
      {haveData && (
        <>
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
