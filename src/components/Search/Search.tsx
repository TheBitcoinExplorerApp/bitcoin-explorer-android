import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";

export default function Search() {
  const [searchContent, setSearchContent] = React.useState("");

  useEffect(() => {}, [searchContent]);

  const onlyLettersAndNumbers = /^[a-zA-Z0-9]*$/;

  const handleInputChange = (text: string) => {
    if (onlyLettersAndNumbers.test(text)) {
      setSearchContent(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar"
        style={styles.input}
        placeholderTextColor="#8d8d9a"
        value={searchContent}
        onChangeText={handleInputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    backgroundColor: "#1d2133",
    borderRadius: 5,
    padding: 12,
    width: "100%",
    fontSize: 18,
    color: "#FFF",
  },
});
