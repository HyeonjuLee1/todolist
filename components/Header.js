import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Header = ({ show }) => {
  return (
    <View style={styles.containter}>
      <Text style={styles.title}>할 일 목록</Text>
      <TouchableOpacity
        onPress={show}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Icon name="plus" color="#FFFFFF" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 56,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    color: "#212121",
    fontSize: 32,
    fontWeight: "600",
  },
  button: {
    width: 28,
    height: 28,
    backgroundColor: "#212121",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0,
    }),
  },
});

export default Header;
