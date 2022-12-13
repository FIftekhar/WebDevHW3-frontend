import { FETCH_EMPLOYEE } from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
};

export default employee;