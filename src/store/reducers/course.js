import { FETCH_COURSE } from "../actions/actionTypes";

const initialState = {
  instructor: {},
};

// REDUCER;
const course = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE:
      return action.payload;
    default:
      return state;
  }
};

export default course;