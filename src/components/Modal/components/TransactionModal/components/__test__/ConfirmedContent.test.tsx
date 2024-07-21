/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { initialStateTransaction } from "src/__mocks__/initialStates";
import ConfirmedContent from "../ConfirmedContent";

describe("ConfirmedContent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ConfirmedContent
          fee={initialStateTransaction.fee}
          size={initialStateTransaction.size}
          statusTransaction={{
            confirmed: true,
            blockHeight: 1,
            blockHash: "abc",
            blockTime: 204,
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
