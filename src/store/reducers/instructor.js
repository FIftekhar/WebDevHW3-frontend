import { FETCH_INSTRUCTOR } from "../actions/actionTypes";

const initialState = {
  courses: [],
};

const instructor = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTOR:
      return action.payload;
    default:
      return state;
  }
};

export default instructor;