import Main from "src/components/templates/Main";
import useAppStore from "src/stores/App/useAppStore";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";
import CustomActivityIndicator from "src/components/CustomActivityIndicator/CustomActivityIndicator";

type TransactionsProps = {
  navigation: unknown;
};

const showLoading = <CustomActivityIndicator />;

export default function Transactions(props: TransactionsProps) {
  const { navigation } = props;
  const { isLoading, localization, transactions } = useAppStore();
  const haveData = transactions?.length > 0;

  return (
    <Main navigation={navigation} actualScreen="Transactions">
      {isLoading && showLoading}

      {!isLoading && haveData && (
        <TransactionsInfo
          transactions={transactions}
          localization={localization}
        />
      )}
    </Main>
  );
}
