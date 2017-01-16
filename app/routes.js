'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App.jsx';
import App2 from './App2.jsx';

class Routes extends React.Component{

	render(){

		return (
			<Router history={browserHistory}>
				<Route path="/" component={App2} />
				<Route path="/hello" component={App} />
			</Router>
		);
	}
}

export default Routes;