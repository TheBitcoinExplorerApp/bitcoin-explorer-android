/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { initialStateTransaction } from "src/__mocks__/initialStates";
import AllTransactionsInTransactionModal from "../AllTransactionsInTransactionModal";

describe("AllTransactionsInTransactionModal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AllTransactionsInTransactionModal
          inputTransactions={initialStateTransaction.inputTransactions}
          outputTransactions={initialStateTransaction.outputTransactions}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
