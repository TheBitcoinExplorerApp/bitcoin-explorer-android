/* eslint-disable import/no-extraneous-dependencies */
import { View, Text, StyleSheet } from "react-native";

export type SmallBox = {
  title: string;
  value: string;
};

type SmallBoxInfoProps = {
  boxesInfos: SmallBox[];
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxContainer: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#1d2133",
    width: 100,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 7,
  },
  text: {
    color: "#FFF",
    fontSize: 14,
  },
});

export default function SmallBoxInfo(props: SmallBoxInfoProps) {
  const { boxesInfos } = props;

  return (
    <View style={styles.container}>
      {boxesInfos.map((infos, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <View style={styles.boxContainer} key={idx}>
          <Text style={styles.text}>{infos.title} sat/vB</Text>
          {/* <Text style={styles.text}>R$ {infos.value}</Text>
            #TODO: take price value from another endpoint to calculate the value in BRL
          */}
        </View>
      ))}
    </View>
  );
}
