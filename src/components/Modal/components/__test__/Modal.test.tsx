/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import {
  initialStateAddress,
  initialStateBlocks,
  initialStateTransaction,
} from "src/__mocks__/initialStates";
import Modal from "../../Modal";

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

describe("Modal", () => {
  it("renders correctly when type is Transaction", () => {
    const tree = renderer
      .create(
        <Modal
          isVisible
          modalType="Transaction"
          transactionHash="#ABC12"
          handleModalClose={() => {}}
          transactionInfo={initialStateTransaction}
          lastBlockHeight={2}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when type is Address", () => {
    const tree = renderer
      .create(
        <Modal
          isVisible
          modalType="Address"
          addressInfo={{
            address: "0x123",
            addressData: initialStateAddress,
          }}
          handleModalClose={() => {}}
          addressTransactions={[
            initialStateTransaction,
            initialStateTransaction,
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when type is Block", () => {
    const tree = renderer
      .create(
        <Modal
          isVisible
          modalType="Block"
          handleModalClose={() => {}}
          size={initialStateBlocks[0].size}
          extras={initialStateBlocks[0].extras}
          timeAgo={initialStateBlocks[0].timeAgo}
          blockHash={initialStateBlocks[0].blockHash}
          blockHeight={initialStateBlocks[0].blockHeight}
          satPerVbyte={initialStateBlocks[0].satPerVbyte}
          transactions={initialStateBlocks[0].transactions}
          blockTransactions={[initialStateTransaction, initialStateTransaction]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
