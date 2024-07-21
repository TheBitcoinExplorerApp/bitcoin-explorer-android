// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import Transaction from "../Transaction";

describe("Transaction", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Transaction
          transactions={[{ fee: 10, transactionId: "#ABC12", value: 10 }]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
