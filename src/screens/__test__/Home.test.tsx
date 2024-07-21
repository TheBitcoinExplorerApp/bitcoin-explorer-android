// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import "src/__mocks__/navigation";
import Home from "../Home";

describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Home navigation={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
