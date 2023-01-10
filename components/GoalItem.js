import { Text, StyleSheet, View } from "react-native";

export const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listItemText: {
    color: "white",
  },
});
