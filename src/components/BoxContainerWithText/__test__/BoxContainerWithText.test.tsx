// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import BoxContainerWithText from "../BoxContainerWithText";

describe("BoxContainerWithText", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<BoxContainerWithText firstText="first" secondText="second" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
