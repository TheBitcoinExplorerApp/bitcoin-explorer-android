/* eslint-disable import/no-extraneous-dependencies */
import { ActivityIndicator } from "react-native";
import React from "react";
import Colors from "src/constants/Colors";

export default function CustomActivityIndicator() {
  return <ActivityIndicator size="large" color={Colors.primary} />;
}
