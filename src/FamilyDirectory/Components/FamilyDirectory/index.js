import React, { Component } from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { FamilyDirectoryContext } from "../../Providers/FamilyDirectory";

const FamilyDirectoryList = props => (
  <FlatList
    data={props.data}
    renderItem={({ item }) => (
      <FamilyDirectoryListItem
        style={styles.item}
        fullName={`${item.firstName} ${item.lastName}`}
      />
    )}
  />
);

const FamilyDirectoryListItem = props => (
  <Text style={props.style}>{props.fullName}</Text>
);

class FamilyDirectory extends Component {
  render() {
    return (
      <FamilyDirectoryContext.Consumer>
        {({ ...data }) => (
          <FamilyDirectoryList data={data.students} />
        )}
      </FamilyDirectoryContext.Consumer>
    );
  }
}

export default FamilyDirectory;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
