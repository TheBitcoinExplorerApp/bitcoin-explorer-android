/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import {
  initialStateBlocks,
  initialStateTransaction,
} from "src/__mocks__/initialStates";
import BlockModal from "../BlockModal";

describe("BlockModal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BlockModal
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...initialStateBlocks[0]}
          blockTransactions={[initialStateTransaction, initialStateTransaction]}
          handleModalClose={() => {}}
          isVisible
          modalType="Block"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
