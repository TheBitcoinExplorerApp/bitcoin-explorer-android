// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import { initialStateTransaction } from "src/__mocks__/initialStates";
import TransactionModal from "../TransactionModal";

describe("TransactionModal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TransactionModal
          modalType="Transaction"
          transactionInfo={initialStateTransaction}
          transactionHash="#ABC12"
          isVisible
          handleModalClose={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
