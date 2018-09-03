import React, { Component } from "React";
import FamilyDirectoryContext from "./FamilyDirectoryContext";

const initialStudents = [
  {
    firstName: "Ethan",
    lastName: "Ginn",
    gradeLevel: "K",
    key: "1"
  },
  {
    firstName: "Owen",
    lastName: "Ginn",
    gradeLevel: "Pre-K",
    key: "2"
  }
];

const grades = [
  {
    name:"All",
    value:"All"
  },
  {
    name: "Pre-K",
    value: "Pre-K"
  },
  {
    name: "Kindergarten",
    value: "K"
  }
];

class FamilyDirectoryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        students: initialStudents,
        grades:grades,
        selectedGrade: "All"
      }
    };
  }

  selectedGradeChanged = grade => {
    let state = this.state;
    state.data.selectedGrade = grade;

    let students = initialStudents;
    if (grade !== "All") {
      students = students.filter(student => student.gradeLevel === grade);
    }

    state.data.students = students;

    this.setState(() => state);
  };

  render() {
    return (
      <FamilyDirectoryContext.Provider
        value={{
          ...this.state.data,
          selectedGradeChanged: this.selectedGradeChanged
        }}
      >
        {this.props.children}
      </FamilyDirectoryContext.Provider>
    );
  }
}

export default FamilyDirectoryProvider;
