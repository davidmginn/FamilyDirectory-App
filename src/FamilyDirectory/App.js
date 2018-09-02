import React from "react";
import { StyleSheet, View } from "react-native";
import { FamilyDirectoryProvider } from "./Providers/FamilyDirectory";
import FamilyDirectory from "./Components/FamilyDirectory";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FamilyDirectoryProvider>
          <FamilyDirectory />
        </FamilyDirectoryProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:32
  }
});
