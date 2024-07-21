// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import "src/__mocks__/navigation";
import Main from "../Main";

describe("Main", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Main navigation={() => {}} actualScreen="Home">
          Snapshot test!
        </Main>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
