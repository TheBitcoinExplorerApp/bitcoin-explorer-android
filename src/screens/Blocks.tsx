// eslint-disable-next-line import/no-extraneous-dependencies
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import useAppStore from "src/stores/App/useAppStore";
import CustomActivityIndicator from "src/components/CustomActivityIndicator/CustomActivityIndicator";

type BlocksProps = {
  navigation: unknown;
};

const showLoading = <CustomActivityIndicator />;

export default function Blocks(props: BlocksProps) {
  const { navigation } = props;

  const { isLoading, blocks, localization } = useAppStore();

  return (
    <Main navigation={navigation} actualScreen="Blocks">
      {isLoading && showLoading}

      {!isLoading && blocks && (
        <BlocksInfo blocks={blocks} localization={localization} />
      )}
    </Main>
  );
}
