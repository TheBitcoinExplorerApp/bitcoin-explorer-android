// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import Title from "../Title";

describe("Title", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
