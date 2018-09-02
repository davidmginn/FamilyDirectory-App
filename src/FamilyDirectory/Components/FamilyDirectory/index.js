import React, { Component } from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { FamilyDirectoryContext } from "../../Providers/FamilyDirectory";

class FamilyDirectory extends Component {
  render() {
    return (
      <FamilyDirectoryContext.Consumer>
        {({ ...data }) => ( 
            <FlatList data={data.students}
                renderItem={({item}) => (
                    <Text style={styles.item}>
                        {`${item.firstName} ${item.lastName}`}
                    </Text>
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
