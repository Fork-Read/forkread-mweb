import { routerReducer as routing } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

export const finalReducer = combineReducers({
  routing,
  userReducer
});

const mainStore = createStore(finalReducer);

export default mainStore;
