/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { initialStateTransaction } from "src/__mocks__/initialStates";
import AllTransactionsInTransactionModal from "../AllTransactionsInTransactionModal";

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

describe("AllTransactionsInTransactionModal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AllTransactionsInTransactionModal
          inputTransactions={initialStateTransaction.inputTransactions}
          outputTransactions={initialStateTransaction.outputTransactions}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
