import { useEffect, useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Text } from "react-native";

export const GoalInput = ({
  courseGoals,
  setCourseGoals,
  modalIsVisible,
  setModalIsVisible,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const addGoalHandler = () => {
    if (enteredGoalText) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setModalIsVisible(false);
    }
    setEnteredGoalText("");
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={(enteredText) => setEnteredGoalText(enteredText)}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal!" onPress={addGoalHandler} />
          </View>

          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => setModalIsVisible(false)}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "100%",
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
