import * as ac from './actions/actionCreators';
const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5000/api";

// THUNKS

//All instructors
export const fetchAllInstructorsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/instructors`);
    dispatch(ac.fetchAllInstructors(res.data));
  } catch(err) {
    console.error(err);
  }
};

//Single instructor
export const fetchInstructorThunk = (id) => async (dispatch) => {
  // thunk creator would not an be async function 
  // if using Promise.then:
  // return axios
  //   .get(`${path}/api/instructors/${id}`)
  //   .then((res) => res.data)
  //   .then((instructor) => dispatch(ac.fetchInstructor(instructor)))
  //   .catch((err) => console.log(err));
  try {
    let res = await axios.get(`${path}/instructors/${id}`);
    dispatch(ac.fetchInstructor(res.data));
  } catch(err) {
    console.error(err);
  }
};

//All courses
export const fetchAllCoursesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/courses`);
    dispatch(ac.fetchAllCourses(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addCourseThunk = (course) => async (dispatch) => {
  // course = { title: "CSCI 127" }
  try {
    let res = await axios.post(`${path}/courses`, course);
    dispatch(ac.addCourse(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteCourseThunk = courseId => async dispatch => {
  try {
    await axios.delete(`${path}/courses/${courseId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deleteCourse(courseId));
  } catch(err) {
    console.error(err);
  }
};

export const editCourseThunk = course => async dispatch => {
  try {
    let updatedCourse = await axios.put(`${path}/courses/${course.id}`, course);
    dispatch(ac.editCourse(updatedCourse));
  } catch(err) {
    console.error(err);
  }
};

//Single course
export const fetchCourseThunk = id => async dispatch => {
  try {
    let res = await axios.get(`${path}/courses/${id}`);
    dispatch(ac.fetchCourse(res.data));
  } catch(err) {
    console.error(err);
  }
};
