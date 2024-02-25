import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import Slider from "@react-native-community/slider";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#f1f1f1" />

      <Text style={styles.heading}>Roteiro Fácil</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Destino</Text>
        <TextInput placeholder="EX: Fortaleza - CE" style={styles.input} />

        <Text style={styles.label}>
          Tempo de estadia: <Text style={styles.days}>10</Text> dias{" "}
        </Text>

        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#009698"
          maximumTrackTintColor="#000000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 34,
  },
  form: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ccc",
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  days: {
    backgroundColor: "#f1f1f1",
  },
});
