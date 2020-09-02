import * as types from "../actions/imagesActions";
const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default errorsReducer;