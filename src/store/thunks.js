import * as ac from './actions/actionCreators';
const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5000/api";

// THUNKS

//All instructors
export const fetchAllEmployeesThunk = () => async (dispatch) => {
    try {
		let res = await axios.get(`${path}/employees`);
		dispatch(ac.fetchAllEmployees(res.data));
    } catch(err) {
      	console.error(err);
    }
};

//Single instructor
export const fetchEmployeeThunk = (id) => async (dispatch) => {
	// thunk creator would not an be async function 
	// if using Promise.then:
	// return axios
	//   .get(`${path}/api/instructors/${id}`)
	//   .then((res) => res.data)
	//   .then((instructor) => dispatch(ac.fetchInstructor(instructor)))
	//   .catch((err) => console.log(err));
	try {
		let res = await axios.get(`${path}/employees/${id}`);
		dispatch(ac.fetchEmployee(res.data));
	} catch(err) {
		console.error(err);
	}
};

//All courses
export const fetchAllTasksThunk = () => async (dispatch) => {
	try {
		let res = await axios.get(`${path}/tasks`);
		dispatch(ac.fetchAllTasks(res.data));
	} catch(err) {
		console.error(err);
	}
};

export const addTaskThunk = (task) => async (dispatch) => {
	// course = { title: "CSCI 127" }
	try {
		let res = await axios.post(`${path}/tasks`, task);
		dispatch(ac.addTask(res.data));
		return res.data;
	} catch(err) {
		console.error(err);
	}
};

export const deleteTaskThunk = taskId => async dispatch => {
	try {
		await axios.delete(`${path}/tasks/${taskId}`);
		//delete succesful so change state with dispatch
		dispatch(ac.deleteTask(taskId));
	} catch(err) {
		console.error(err);
	}
};

export const editTaskThunk = task => async dispatch => {
	try {
		let res = await axios.put(`${path}/tasks/${task.id}`, task);
		//res.data is the updated course object
		dispatch(ac.editTask(res.data));
	} catch(err) {
		console.error(err);
	}
};

//Single course
export const fetchTaskThunk = id => async dispatch => {
	try {
		let res = await axios.get(`${path}/tasks/${id}`);
		dispatch(ac.fetchTask(res.data));
	} catch(err) {
		console.error(err);
	}
};
