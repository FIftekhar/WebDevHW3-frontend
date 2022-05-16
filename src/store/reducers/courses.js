import * as at from "../actions/actionTypes";

// REDUCER;
const allCourses = (state=[], action) => {
  switch (action.type) {
    case at.FETCH_ALL_COURSES:
      return action.payload;
    case at.ADD_COURSE:
      return [...state, action.payload]
    case at.DELETE_COURSE:
      return state.filter(course => course.id!==action.payload);
    case at.EDIT_COURSE:
      return state.map(course => { 
        return (
          course.id===action.payload.id ? action.payload : course
        );
      });
    default:
      return state;
  }
};

export default allCourses;