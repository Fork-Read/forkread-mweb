'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { FixNamedRoutesSupport as fixNamedRoutesSupport } from 'react-router-named-routes';

import routes from './routes';
import { finalReducer } from './stores/mainStore';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(finalReducer, window.__INITIAL_STATE__, composeEnhancers(
  applyMiddleware(routerMiddleware(browserHistory), thunk)));

const history = browserHistory;
syncHistoryWithStore(history, myStore);
fixNamedRoutesSupport(routes);

ReactDOM.render((
  <Provider store={myStore}>
    <Router history={history} >
      { routes }
    </Router>
  </Provider>
), document.getElementById('app'));
