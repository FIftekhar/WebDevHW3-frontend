import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk } from "../../store/thunks";
import { TaskView } from "../views";

class TaskContainer extends Component {
  componentDidMount() {
    //getting course ID from url
    this.props.fetchTask(this.props.match.params.id);
  }

  render() {
    return (
      <TaskView 
        task={this.props.task}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(TaskContainer);