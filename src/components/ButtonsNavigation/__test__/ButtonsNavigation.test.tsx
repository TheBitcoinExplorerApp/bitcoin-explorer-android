/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import ButtonsNavigation from "../ButtonsNavigation";
import "src/__mocks__/navigation";

describe("ButtonsNavigation", () => {
  it("renders correctly when at Home", () => {
    const tree = renderer
      .create(<ButtonsNavigation actualScreen="Home" navigation={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when at Blocks", () => {
    const tree = renderer
      .create(<ButtonsNavigation actualScreen="Blocks" navigation={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when at Transactions", () => {
    const tree = renderer
      .create(
        <ButtonsNavigation actualScreen="Transactions" navigation={() => {}} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
