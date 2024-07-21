// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import TransactionsInfo from "../TransactionsInfo";

describe("TransactionsInfo", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TransactionsInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
