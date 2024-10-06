/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import {
  initialStateAddress,
  initialStateTransaction,
} from "src/__mocks__/initialStates";
import AddressModal from "../AddressModal";

jest.mock("src/stores/App/useAppStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    localization: { t: (key) => key }, // Mock da função t de tradução
    selectedCurrency: "USD", // Moeda mockada
    bitcoinPrice: {
      mempool: { USD: 50000 },
      blockchainInfo: { USD: { buy: 50000 } },
    }, // Preço fictício
  })),
}));

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
          modalType="Address"
          isVisible
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
