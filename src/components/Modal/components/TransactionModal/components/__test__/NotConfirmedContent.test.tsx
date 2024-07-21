/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import NotConfirmedContent from "../NotConfirmedContent";

describe("NotConfirmedContent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<NotConfirmedContent fee={0.00001} size={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
