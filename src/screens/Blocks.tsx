import { ActivityIndicator } from "react-native";
import { useContext } from "react";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import { DataContext } from "src/context/DataProvider";

type BlocksProps = {
  navigation: any;
};

export default function Blocks(props: BlocksProps) {
  const { navigation } = props;

  const { isLoading } = useContext(DataContext);
  const showLoading = <ActivityIndicator size="large" color="white" />;

  return (
    <Main navigation={navigation} actualScreen="Blocks">
      {isLoading ? showLoading : <BlocksInfo />}
    </Main>
  );
}
