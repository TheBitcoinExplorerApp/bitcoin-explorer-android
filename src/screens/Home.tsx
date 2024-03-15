import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { useContext } from "react";
import PrioritiesTaxValuesBox from "../components/PrioritiesTax/PrioritiesTax";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";
import useAppDataStore from "src/context/DataProvider";
import { I18n } from "i18n-js";
import { I18nContext } from "src/context/LocaleProvider";

type HomeProps = {
  navigation: any;
};

export default function Home(props: HomeProps) {

  const { isLoading } = useAppDataStore();
  const i18nContext = useContext(I18nContext);

  const { navigation } = props;

  const showLoading = <ActivityIndicator size="large" color="white" />;

  const content = (
    <>
      <Text style={styles.title}>{i18nContext.t("transaction_fees")}</Text>

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
