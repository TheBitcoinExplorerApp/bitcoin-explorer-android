/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import CloseBtn from "../CloseBtn";

describe("CloseBtn", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CloseBtn handleModalClose={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
