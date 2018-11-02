import React from "react";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

interface Props {
  newItemName: string; // Prop that the TextInput is controlled by
  placeholderText: string;
  createButtonText: string;
  handleNameChange(title: string): void;
  handleCreateNewItem(): Promise<void>;
}

export const NewItem = (props: Props) => {
  const {
    newItemName,
    placeholderText,
    createButtonText,
    handleNameChange,
    handleCreateNewItem
  } = props;
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={placeholderText}
        onChangeText={handleNameChange}
        value={newItemName}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (newItemName !== "") {
            handleCreateNewItem().then(() => {
              // Reset the text input
              handleNameChange("");
            });
          }
        }}
      >
        <Text>{createButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 5,
    flex: 4
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5
  }
});