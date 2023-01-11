import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { CounterContainer } from "./components/CounterContainer";
import { GoalInput } from "./components/GoalInput";
import { GoalsContainer } from "./components/GoalsContainer";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
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
        color={"red"}
        onPress={() => setModalIsVisible(true)}
      />
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
