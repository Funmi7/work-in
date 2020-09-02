import { combineReducers } from 'redux';

import userReducer from './authenticationReducer';
import imagesReducer from './imageReducer';

const appReducer = combineReducers({
  userReducer,
  imagesReducer,

});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
