import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

function SingleComponent({ title }) {
  return (
    <View style={styles.single}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

function HiddenComponent() {
  return (
    <View style={styles.btnWrapper}>
      <TouchableOpacity
        onPress={() => Alert.alert("Hello, welcome to candie world")}
        style={styles.edit}>
        <Text style={styles.btnTitle}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("Hello, welcome to candie world")}
        style={styles.delete}>
        <Text style={styles.btnTitle}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View style={styles.container}>
      <SwipeListView
        data={arr}
        renderItem={() => <SingleComponent title="Hello, my name is candie" />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
        renderHiddenItem={() => <HiddenComponent />}
        rightOpenValue={-150}
        disableRightSwipe
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    padding: 10,
  },
  single: {
    width: "100%",
    backgroundColor: "orangered",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  edit: {
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 10,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 10,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnWrapper: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    right: 0,
  },
  btnTitle: {
    fontSize: 12,
  },
});
