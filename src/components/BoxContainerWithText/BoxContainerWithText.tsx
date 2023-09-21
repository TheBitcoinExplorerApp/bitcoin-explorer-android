import { View, Text, StyleSheet, FlexAlignType } from 'react-native';
import React from 'react';

type BoxContainerWithTextProps = {
  firstText: string;
  secondText: string;
  reverse?: boolean;
  secondTextWhite?: boolean;
  width?: string;
  borderStyles?: {
    borderTopEndRadius?: number;
    borderBottomEndRadius?: number;
    borderTopStartRadius?: number;
    borderBottomStartRadius?: number;
    borderBottomColor?: string;
  };
};

export default function BoxContainerWithText(props: BoxContainerWithTextProps) {
  const { firstText, secondText, reverse, borderStyles } = props;

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: reverse ? 'row-reverse' : 'row',
          width: props.width || '100%',
          borderRadius: 7,
          borderTopEndRadius: borderStyles?.borderTopEndRadius,
          borderBottomEndRadius: borderStyles?.borderBottomEndRadius,
          borderTopStartRadius: borderStyles?.borderTopStartRadius,
          borderBottomStartRadius: borderStyles?.borderBottomStartRadius,
          borderBottomColor: borderStyles?.borderBottomColor,
          borderBottomWidth: borderStyles?.borderBottomColor ? 0.1 : 0,
        },
      ]}
    >
      <Text style={styles.firstText}>{firstText}</Text>
      <Text
        style={{
          color: props.secondTextWhite ? '#FFF' : '#DF7800',
          fontSize: 15,
        }}
      >
        {secondText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d2133',
    justifyContent: 'space-between',
    paddingVertical: 9,
    paddingHorizontal: 18,
    alignItems: 'center',
    height: 48
  },
  firstText: {
    color: '#FFF',
    fontSize: 15,
  },
});
