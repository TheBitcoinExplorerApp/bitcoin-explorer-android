// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import { initialStateTransaction } from "src/__mocks__/initialStates";
import TransactionModal from "../TransactionModal";

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

describe("TransactionModal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TransactionModal
          isVisible
          lastBlockHeight={2}
          modalType="Transaction"
          transactionHash="#ABC12"
          transactionInfo={initialStateTransaction}
          handleModalClose={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
