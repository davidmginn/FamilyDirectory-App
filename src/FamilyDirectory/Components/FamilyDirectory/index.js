import React, { Component } from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { FamilyDirectoryContext } from "../../Providers/FamilyDirectory";

const FamilyDirectoryListItem = props => (
  <Text style={props.style}>{props.fullName}</Text>
);

class FamilyDirectory extends Component {
  render() {
    return (
      <FamilyDirectoryContext.Consumer>
        {({ ...data }) => (
          <FlatList
            data={data.students}
            renderItem={({ item }) => (
              <FamilyDirectoryListItem
                style={styles.item}
                fullName={`${item.firstName} ${item.lastName}`}
              />
            )}
          />
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
