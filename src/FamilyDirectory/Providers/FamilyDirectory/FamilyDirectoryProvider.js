import React, { Component } from "React";
import FamilyDirectoryContext from "./FamilyDirectoryContext";

class FamilyDirectoryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        students: [
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
        ]
      }
    };
  }

  render() {
    return (
      <FamilyDirectoryContext.Provider value={{...this.state.data}}>
        {this.props.children}
      </FamilyDirectoryContext.Provider>
    );
  }
}

export default FamilyDirectoryProvider;
