import { Text, StyleSheet, View, Pressable } from "react-native";

export const GoalItem = ({ text, id, courseGoals, setCourseGoals }) => {
  const deleteGoalHandler = (value) => {
    setCourseGoals(courseGoals.filter((item) => item.id !== value));
  };
  return (
    <Pressable onPress={() => deleteGoalHandler(id)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{text}</Text>
      </View>
    </Pressable>
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
