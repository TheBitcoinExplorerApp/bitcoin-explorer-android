/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { initialStateBlocks } from "src/__mocks__/initialStates";
import Block from "../Block";

describe("Block", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Block blocks={initialStateBlocks} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
