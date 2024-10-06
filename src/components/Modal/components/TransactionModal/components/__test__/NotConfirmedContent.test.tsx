/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import NotConfirmedContent from "../NotConfirmedContent";

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

describe("NotConfirmedContent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<NotConfirmedContent fee={0.00001} size={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
