import { routerReducer as routing } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import authenticationReducer from '../reducers/authenticationReducer';

export const finalReducer = combineReducers({
  routing,
  authenticationReducer
});

const mainStore = createStore(finalReducer);

export default mainStore;
