'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App2 from './App2.jsx';
import Login from './components/Login.jsx';

class Routes extends React.Component{

	render(){

		return (
			<Router history={browserHistory}>
				<Route path="/" component={App2} />
				<Route path="/login" component={Login} />
			</Router>
		);
	}
}

export default Routes;