// eslint-disable-next-line import/no-extraneous-dependencies
import { View, Text, Modal, StyleSheet, ScrollView } from "react-native";
import { InformationModalProps } from "../../types";
import ModalHeader from "../ModalHeader/ModalHeader";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101427",
    paddingVertical: 17,
    paddingHorizontal: 10,
    gap: 24,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default function InformationModal(props: InformationModalProps) {
  const { handleModalClose, isVisible } = props;

  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <ScrollView
        contentContainerStyle={{
          marginTop: "38%",
          paddingBottom: "40%",
          height: "100%",
          backgroundColor: "#101427",
        }}
      >
        <View style={styles.container}>
          <ModalHeader
            title="Bugs?"
            handleModalClose={() => {
              handleModalClose();
            }}
          />

          <Text style={styles.text}>
            Reporte para: bitcoinblockexplorer@gmail.com
          </Text>
          <Text style={styles.text}>
            Mande o máximo de evidencias possíveis, sendo videos, capturas de
            tela ou afins!
          </Text>
        </View>
      </ScrollView>
    </Modal>
  );
}
