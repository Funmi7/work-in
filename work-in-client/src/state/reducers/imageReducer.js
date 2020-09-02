import * as types from "../actions/imagesActions";


const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_IMAGES_SUCCESSFUL:
      return action.images;
    default:
      return state;
  }
};
export default imagesReducer;
