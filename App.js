import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalsContainer } from "./components/GoalsContainer";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          courseGoals={courseGoals}
          setCourseGoals={setCourseGoals}
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
        />
        <GoalsContainer
          courseGoals={courseGoals}
          setCourseGoals={setCourseGoals}
        />
        <Button
          title="Add New Goal"
          color={"#5e0acc"}
          onPress={() => setModalIsVisible(true)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 100,
    paddingHorizontal: 16,
    alignItems: "center",
  },
});
