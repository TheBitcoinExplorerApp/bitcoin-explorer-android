/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import ModalHeader from "../ModalHeader";

describe("ModalHeader", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ModalHeader handleModalClose={() => {}} title="Title" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
