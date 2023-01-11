import { Text, StyleSheet, View, Pressable } from "react-native";

export const GoalItem = ({ text, id, courseGoals, setCourseGoals }) => {
  const deleteGoalHandler = (value) => {
    setCourseGoals(courseGoals.filter((item) => item.id !== value));
  };
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteGoalHandler(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  listItemText: {
    color: "white",
    padding: 8,
  },
});
