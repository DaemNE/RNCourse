import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";

export const CounterContainer = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.counterContainer}>
      <Text style={{ fontSize: 96 }}>{counter}</Text>
      <Button title="increment" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
