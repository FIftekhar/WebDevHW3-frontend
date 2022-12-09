import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchInstructorThunk,
  fetchAllCoursesThunk,
  editCourseThunk 
} from "../../store/thunks";

import { InstructorView } from "../views";

class InstructorContainer extends Component {
  componentDidMount() {
    //getting instructor ID from url
    this.props.fetchInstructor(this.props.match.params.id);
    this.props.fetchCourses();
  }

  render() {
    return (
      <InstructorView 
        instructor={this.props.instructor}
        editCourse={this.props.editCourse}
        allCourses={this.props.allCourses}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
    allCourses: state.allCourses,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
    fetchCourses: () => dispatch(fetchAllCoursesThunk()),

  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);