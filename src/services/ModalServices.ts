import {
  getBlockTransactions,
  getTransactionInfo,
  getAddressInfo,
  getAddressTransactions,
  getBlockHash,
  getBlockInfo,
} from "src/api/getData";
import formatBlockTransactionsInfo from "src/utils/formatBlockTransactionsInfo";
import * as Clipboard from "expo-clipboard";
import formatTransactionsInfo from "src/utils/formatTransactionTransactionsInfo";
import formatAddressInfo from "src/utils/formatAddressInfo";
import { formatBlocksData } from "src/utils/formatBlockInfo";

class ModalServices {
  static async getBlockTransactions(blockHash: string) {
    const res = await getBlockTransactions(blockHash);

    return formatBlockTransactionsInfo(res);
  }

  static async getBlockHash(blockHeight: string) {
    const blockHash = await getBlockHash(blockHeight);

    return blockHash;
  }

  static async getBlockBasicInfo(blockHash: string) {
    const res = await getBlockInfo(blockHash);
    const data = [res];
    return formatBlocksData(data);
  }

  static async getTransactionTransactionsInfo(transactionHash: string) {
    const res = await getTransactionInfo(transactionHash);

    return formatTransactionsInfo(res);
  }

  static async getAddressInfos(address: string) {
    const res = await getAddressInfo(address);

    return formatAddressInfo(res);
  }

  static async getAddressTransactions(address: string) {
    const res = await getAddressTransactions(address);

    return formatBlockTransactionsInfo(res);
  }

  static copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };
}

export default ModalServices;
