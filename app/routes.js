'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App2 from './App2.jsx';
import Login from './components/login.jsx';
import OTP from './components/otp.jsx';
import GenreSelection from './components/genre_selection.jsx';

class Routes extends React.Component{

	render(){

		return (
			<Router history={browserHistory}>
				<Route path="/" component={App2} />
				<Route path="/login" component={Login} />
				<Route path="/otp" component={OTP} />
				<Route path="/genre_select" component={GenreSelection} />
			</Router>
		);
	}
}

export default Routes;