// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import "src/__mocks__/navigation";
import Transactions from "../Transactions";

describe("Transactions", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Transactions navigation={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
