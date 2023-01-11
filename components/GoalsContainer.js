import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { GoalItem } from "./GoalItem";

export const GoalsContainer = ({ courseGoals, setCourseGoals }) => {
  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.title}>Goals for the new year!</Text>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              courseGoals={courseGoals}
              setCourseGoals={setCourseGoals}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 3,
    borderRadius: 6,
    marginBottom: 6,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    textDecorationLine: "underline",
    fontWeight: "bold",
    paddingBottom: 30,
    color: "white",
  },
});
