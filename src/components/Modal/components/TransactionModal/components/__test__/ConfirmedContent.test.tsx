/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { initialStateTransaction } from "src/__mocks__/initialStates";
import ConfirmedContent from "../ConfirmedContent";

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
          lastBlockHeight={1}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
