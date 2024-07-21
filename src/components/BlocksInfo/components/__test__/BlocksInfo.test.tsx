// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import BlocksInfo from "../../BlocksInfo";

describe("BlocksInfo", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BlocksInfo qtdBlocksToRender={4} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
