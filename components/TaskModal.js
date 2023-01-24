import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";

const TaskModal = ({ isVisible, hide, add }) => {
  let content = "";

  return (
    <Modal
      isVisible={isVisible}
      avoidKeyboard
      onBackdropPress={hide}
      style={styles.modal}
    >
      <View style={styles.container}>
        <TextInput
          onEndEditing={() => add(content)}
          placeholder="새로운 할 일을 추가해 주세요"
          onChangeText={(text) => {
            content = text;
          }}
        ></TextInput>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default TaskModal;
