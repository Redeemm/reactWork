import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  Alert,
} from "react-native";

//Hooks that are imported to the app
//@react-native-community/hooks

const App = () => {
  const [userName, setUserName] = useState();
  const [level, setLevel] = useState();
  const [indexNumber, setIndexNumber] = useState();

  const handleName = (name) => {
    setUserName(name);
  };

  const handleLevel = (level) => {
    setLevel(level);
  };

  const handleIndexNumber = (index) => {
    setIndexNumber(index);
  };

  const handleSubmit = () => {
    Alert.alert("Information Recieved", `${userName} ${level} ${indexNumber}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputs}>
        <Text style={{ flex: 0.4 }}>Full Name</Text>
        <TextInput onChangeText={handleName} style={styles.input} />
      </View>
      <View style={styles.inputs}>
        <Text style={{ flex: 0.4 }}>Level</Text>
        <TextInput
          onChangeText={handleLevel}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputs}>
        <Text style={{ flex: 0.4 }}>Index Number</Text>
        <TextInput
          onChangeText={handleIndexNumber}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    padding: 20,
    fontSize: 20,
  },
  inputs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    width: 100,
    height: 25,
    borderColor: "grey",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
});

export default App;