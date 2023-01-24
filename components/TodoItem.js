import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ title, done, remove, toggle }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={() => <DeleteButton onPress={remove} />}>
        <View style={styles.container}>
          <View style={styles.todo}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={done ? styles.done : styles.check}
              onPress={toggle}
            >
              <FontAwesome
                name="check"
                color={done ? "#fff" : "#E0E0E0"}
                size={14}
              ></FontAwesome>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  title: {
    fontSize: 16,
    color: "#424242",
  },
  check: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 14,
  },
  done: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 14,
    backgroundColor: "#6830CF",
  },
});

export default TodoItem;
