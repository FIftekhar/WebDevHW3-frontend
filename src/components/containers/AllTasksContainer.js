import { Component } from 'react';
import { connect } from 'react-redux';

import { 
	fetchAllTasksThunk as fetchAllTasksThunk,
	deleteTaskThunk as deleteTaskThunk
} from '../../store/thunks';

import AllTasksView from '../views/AllTasksView';

class AllTasksContainer extends Component {
    componentDidMount() {
      	this.props.fetchAllTasks();
    }
    render(){
        return(
            <div>
                <AllTasksView 
					tasks={this.props.allTasks}
					deleteTask={this.props.deleteTask}   
                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allTasks: state.allTasks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deleteTask: (taskID) => dispatch(deleteTaskThunk(taskID)),
  };
};

export default connect(mapState, mapDispatch)(AllTasksContainer);