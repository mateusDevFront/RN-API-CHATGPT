import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

export default function App() {

  const [city, setCity] = useState("")
  const [days, setDays] = useState(1)
  const [loading, setLoading] = useState(false);
  const [travel, setTravel] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#f1f1f1" />

      <Text style={styles.heading}>Roteiro Fácil</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Destino</Text>
        <TextInput
          value={city}
          onChangeText={(text) => setCity(text)}
        placeholder="EX: Fortaleza - CE" style={styles.input} />

        <Text style={styles.label}>
          Tempo de estadia: <Text style={styles.days}>{days.toFixed(0)}</Text> dias{" "}
        </Text>

        <Slider
          value={days}
          onValueChange={(value) => setDays(value)}
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#009698"
          maximumTrackTintColor="#000000"
        />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Gerar o roteiro</Text>
        <MaterialIcons name="travel-explore" size={24} color="#FFF" />
      </Pressable>

      <ScrollView style={styles.contentScroll}>
        {loading && (
          <View style={styles.content}>
            <Text style={styles.title}>Roteiro da sua viagem</Text>
            <ActivityIndicator  color="#000000" size="large"/>
            <Text>{travel}</Text>
          </View>
        )}
        {travel && (
          <View style={styles.content}>
            <Text style={styles.title}>Carregando...</Text>
            <Text>{travel}</Text>
          </View>
        )}
      </ScrollView>
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
  button: {
    backgroundColor: "#ff5656",
    width: "90%",
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#fff",
    padding: 16,
    width: "100%",
    marginTop: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },
  contentScroll: {
    width: "90%",
    marginTop: 8,
  },
});
