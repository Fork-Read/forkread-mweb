import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

export const finalReducer = combineReducers({
  routerReducer,
  userReducer
});

const mainStore = createStore(finalReducer);

export default mainStore;
