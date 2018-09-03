import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Picker } from "react-native";
import { FamilyDirectoryContext } from "../../Providers/FamilyDirectory";

const FamilyDirectoryList = props => (
  <FamilyDirectoryContext.Consumer>
    {({...data}) => (
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

const FamilyDirectoryListItem = props => (
  <Text style={props.style}>{props.fullName}</Text>
);

const GradeFilter = () => (
  <FamilyDirectoryContext.Consumer>
  {({ ...data, selectedGradeChanged }) => (
  <Picker selectedValue={data.selectedGrade} onValueChange={(itemValue) => selectedGradeChanged(itemValue)}>
    {data.grades.map(grade => (
      <Picker.Item key={grade.value} value={grade.value} label={grade.name} />
    ))}
  </Picker>)}
  </FamilyDirectoryContext.Consumer>
);

class FamilyDirectory extends Component {
  render() {
    return (
      <FamilyDirectoryContext.Consumer>
        {({ ...data, selectedGradeChanged }) => (
          <View>
            <GradeFilter />
            <FamilyDirectoryList />
          </View>
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
