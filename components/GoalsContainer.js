import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { GoalItem } from "./GoalItem";

export const GoalsContainer = ({ courseGoals }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
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
