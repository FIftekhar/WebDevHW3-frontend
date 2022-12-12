import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewTaskView from '../views/NewTaskView';
import { addTaskThunk } from '../../store/thunks';


class NewTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "", 
          priority: "",
          completion: "", 
          employeeID: null, 
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
    }

    handleSubmit = async event => {
        event.preventDefault();

        let task = {
            description: this.state.description,
            priority: this.state.priority,
            completion: this.state.completion,
            employeeID: this.state.employeeID
        };
        
        let newTask = await this.props.addTask(task);

        this.setState({
          description: this.state.description,
          priority: this.state.priority,
          completion: this.state.completion,
          employeeID: null, 
          redirect: true, 
          redirectId: newTask.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }
        return (
          <NewTaskView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addTask: (task) => dispatch(addTaskThunk(task)),
    })
}

export default connect(null, mapDispatch)(NewTaskContainer);