import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All instructors
export const fetchAllInstructors = (instructors) => {
  return {
    type: at.FETCH_ALL_INSTRUCTORS,
    payload: instructors,
  };
};

//Single instructor
export const fetchInstructor = (instructor) => {
  return {
    type: at.FETCH_INSTRUCTOR,
    payload: instructor,
  };
};

//All courses
export const fetchAllCourses = (courses) => {
  return {
    type: at.FETCH_ALL_COURSES,
    payload: courses,
  };
};

export const addCourse = (course) => {
  return {
    type: at.ADD_COURSE,
    payload: course,
  };
};

export const deleteCourse = (courseId) => {
  return {
    type: at.DELETE_COURSE,
    payload: courseId,
  };
};


export const editCourse = (course) => {
  return {
    type: at.EDIT_COURSE,
    payload: course,
  };
};

//Single course
export const fetchCourse = (course) => {
  return {
    type: at.FETCH_COURSE,
    payload: course,
  };
};