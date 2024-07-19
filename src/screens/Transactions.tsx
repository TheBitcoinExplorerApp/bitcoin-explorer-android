// eslint-disable-next-line import/no-extraneous-dependencies
import { ActivityIndicator } from "react-native";
import Main from "src/components/templates/Main";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";
import useAppDataStore from "src/context/DataProvider";

type TransactionsProps = {
  navigation: unknown;
};

export default function Transactions(props: TransactionsProps) {
  const { navigation } = props;
  const { isLoading } = useAppDataStore();
  const showLoading = <ActivityIndicator size="large" color="white" />;

  return (
    <Main navigation={navigation} actualScreen="Transactions">
      {isLoading ? showLoading : <TransactionsInfo />}
    </Main>
  );
}
