/* eslint-disable react/jsx-props-no-spreading */ // #TODO: VERIFY IF IS POSSIBLE TO NOT BE SPREAD PROPS
import { ModalProps } from "./types";
import TransactionModal from "./components/TransactionModal/TransactionModal";
import BlockModal from "./components/BlockModal/BlockModal";
import AddressModal from "./components/AddressModal/AddressModal";

export default function Modal(props: ModalProps) {
  const { modalType } = props;

  if (modalType === "Transaction") {
    return <TransactionModal {...props} />;
  }

  if (modalType === "Address") {
    return <AddressModal {...props} />;
  }

  return <BlockModal {...props} />;
}
