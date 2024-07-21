/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import SmallBoxInfo from "../SmallBoxInfo";

describe("SmallBoxInfo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <SmallBoxInfo
          boxesInfos={[
            { title: "1", value: "0.000001" },
            { title: "2", value: "0.000002" },
            { title: "3", value: "0.000003" },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
