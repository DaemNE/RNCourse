import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { GoalItem } from "./GoalItem";

export const GoalsContainer = ({ courseGoals, setCourseGoals }) => {
  return (
    <View style={styles.goalsContainer}>
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
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 6,
  },
});
