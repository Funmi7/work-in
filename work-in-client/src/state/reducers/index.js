import { combineReducers } from 'redux';

import userReducer from './authenticationReducer';

const appReducer = combineReducers({
  userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
