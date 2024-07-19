// eslint-disable-next-line import/no-extraneous-dependencies
import { ActivityIndicator } from "react-native";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import useAppDataStore from "src/context/DataProvider";

type BlocksProps = {
  navigation: unknown;
};

export default function Blocks(props: BlocksProps) {
  const { navigation } = props;

  const { isLoading } = useAppDataStore();

  const showLoading = <ActivityIndicator size="large" color="white" />;

  return (
    <Main navigation={navigation} actualScreen="Blocks">
      {isLoading ? showLoading : <BlocksInfo />}
    </Main>
  );
}
