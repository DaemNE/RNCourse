import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text style={styles.textContent}>Hello world!</Text>
      <Text
        style={{
          margin: 16,
          borderColor: "black",
          borderWidth: 1,
          padding: 16,
        }}
      >
        Hello world!
      </Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    margin: 16,
    borderColor: "black",
    borderWidth: 1,
    padding: 16,
  },
});
