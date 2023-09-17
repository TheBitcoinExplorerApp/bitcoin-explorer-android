import { getBlockTransactions } from "src/api/getData";
import formatBlockTransactionsInfo from "src/utils/formatBlockTransactionsInfo";
import * as Clipboard from "expo-clipboard";

class ModalServices {
  static async getBlockTransactions(blockHash: string) {
    const res = await getBlockTransactions(blockHash);

    return formatBlockTransactionsInfo(res);
  }

  static getTransactionInfos() {}

  static copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };
}

export default ModalServices;
