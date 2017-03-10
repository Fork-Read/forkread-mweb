import { routerReducer as routing } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';

import authenticationReducer from '../reducers/authenticationReducer';
import userReducer from '../reducers/userReducer';

export const finalReducer = combineReducers({
  routing,
  authenticationReducer,
  userReducer
});

const mainStore = createStore(finalReducer);

export default mainStore;
