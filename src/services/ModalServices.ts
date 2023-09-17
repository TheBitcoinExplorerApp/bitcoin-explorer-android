import { getBlockTransactions, getTransactionInfo } from "src/api/getData";
import formatBlockTransactionsInfo from "src/utils/formatBlockTransactionsInfo";
import * as Clipboard from "expo-clipboard";
import formatTransactionTransactionsInfo from "src/utils/formatTransactionTransactionsInfo";

class ModalServices {
  static async getBlockTransactions(blockHash: string) {
    const res = await getBlockTransactions(blockHash);

    return formatBlockTransactionsInfo(res);
  }

  static async getTransactionTransactionsInfo(transactionHash: string) {
    const res = await getTransactionInfo(transactionHash);

    return formatTransactionTransactionsInfo(res);
  }

  static copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };
}

export default ModalServices;
