import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const [inputTexto, setInputTexto] = useState<string>("");
export default function Lista() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Lista de Compras</Text>
      <StatusBar style="auto" />
      <View>
        <TextInput
          value={inputTexto}
          style={{
            borderWidth: 2,
            borderColor: "#000",
            width: 200,
            marginTop: 20,
            marginBottom: 20,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            borderRadius: 10,
          }}
        />
      </View>

      <View style={styles.boxLista}>
        <FlatList
          data={[
            { key: "Banana" },
            { key: "Café" },
            { key: "Aveia" },
            { key: "Carne" },
          ]}
          renderItem={({ item }) => <Text style={styles.list}>{item.key}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  boxLista: {
    width: 400,
    height: 500,
    borderRadius: 15,
    marginTop: 60,
    backgroundColor: "#B0C4DE",
    borderColor: "#1c1c1c",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },
});
