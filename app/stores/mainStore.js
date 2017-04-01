import { routerReducer as routing } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';

import authenticationReducer from '../reducers/authenticationReducer';
import userReducer from '../reducers/userReducer';
import genreReducer from '../reducers/genreReducer';
import userGenreReducer from '../reducers/userGenreReducer';

export const finalReducer = combineReducers({
  routing,
  authenticationReducer,
  userReducer,
  genreReducer,
  userGenreReducer
});

const mainStore = createStore(finalReducer);

export default mainStore;
