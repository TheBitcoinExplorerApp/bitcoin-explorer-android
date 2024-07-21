/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import {
  initialStateAddress,
  initialStateTransaction,
} from "src/__mocks__/initialStates";
import AddressModal from "../AddressModal";

describe("AddressModal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AddressModal
          addressInfo={{
            address: "",
            addressData: initialStateAddress,
          }}
          addressTransactions={[
            initialStateTransaction,
            initialStateTransaction,
          ]}
          handleModalClose={() => {}}
          isVisible
          modalType="Address"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
