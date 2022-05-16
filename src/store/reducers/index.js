// A barrel file for our reducers, which will be combined and passed into the Redux store
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allInstructors } from './instructors';
export { default as instructor } from './instructor';
export { default as allCourses } from './courses';
export { default as course } from './course';