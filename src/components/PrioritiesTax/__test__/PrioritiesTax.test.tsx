/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import PrioritiesTax from "../PrioritiesTax";
import "expo-localization"; // Importa para garantir que o mock está sendo usado

describe("PrioritiesTax", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PrioritiesTax />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
