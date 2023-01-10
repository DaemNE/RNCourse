import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { CounterContainer } from "./components/CounterContainer";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";
import { GoalsContainer } from "./components/GoalsContainer";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
      <GoalsContainer courseGoals={courseGoals} />
      <CounterContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
