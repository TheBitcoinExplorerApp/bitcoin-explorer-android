// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import "src/__mocks__/navigation";
import Blocks from "../Blocks";

describe("Blocks", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Blocks navigation={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
