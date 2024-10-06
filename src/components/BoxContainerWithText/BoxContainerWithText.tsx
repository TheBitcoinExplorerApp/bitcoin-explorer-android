// #TODO: WTF I DID ON THIS STYLES
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line import/no-extraneous-dependencies
import { View, Text, StyleSheet } from "react-native";

type BoxContainerWithTextProps = {
  firstText: string;
  secondText: string;
  thirdText?: string;
  reverse?: boolean;
  secondTextWhite?: boolean;
  width?: number | string;
  borderStyles?: {
    borderTopEndRadius?: number;
    borderBottomEndRadius?: number;
    borderTopStartRadius?: number;
    borderBottomStartRadius?: number;
    borderBottomColor?: string;
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d2133",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 18,
    alignItems: "center",
    height: 48,
  },
  firstText: {
    color: "#FFF",
    fontSize: 15,
  },
  infoContainer: {
    alignItems: "center",
  },
});

export default function BoxContainerWithText(props: BoxContainerWithTextProps) {
  const { firstText, secondText, reverse, borderStyles, thirdText } = props;

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: reverse ? "row-reverse" : "row",
        width: typeof props.width === "number" ? props.width : "100%",
        borderRadius: 7,
        borderTopEndRadius: borderStyles?.borderTopEndRadius,
        borderBottomEndRadius: borderStyles?.borderBottomEndRadius,
        borderTopStartRadius: borderStyles?.borderTopStartRadius,
        borderBottomStartRadius: borderStyles?.borderBottomStartRadius,
        borderBottomColor: borderStyles?.borderBottomColor,
        borderBottomWidth: borderStyles?.borderBottomColor ? 0.1 : 0,
      }}
    >
      <Text style={styles.firstText}>{firstText}</Text>
      <View style={styles.infoContainer}>
        <Text
          style={{
            color: props.secondTextWhite ? "#FFF" : "#DF7800",
            fontSize: 15,
          }}
        >
          {secondText}
        </Text>
        {thirdText && (
          <Text
            style={{
              color: "#FFF",
              fontSize: 14,
            }}
          >
            {thirdText}
          </Text>
        )}
      </View>
    </View>
  );
}
