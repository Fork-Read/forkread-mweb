'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App2 from './App2.jsx';
import Login from './components/login.jsx';
import OTP from './components/otp.jsx';
import GenreSelection from './components/genre_selection.jsx';
import Home from './components/home.jsx';
import PopularBooks from './components/popular_books.jsx';
import MyBooks from './components/my_books.jsx';

class Routes extends React.Component{

	render(){

		return (
			<Router history={browserHistory}>
				<Route path="/" component={App2} />
				<Route path="/login" component={Login} />
				<Route path="/otp" component={OTP} />
				<Route path="/genre_select" component={GenreSelection} />
				<Route path="/home" component={Home}>
					<Route path="/home/popular_books" component={PopularBooks} />
					<Route path="/home/my_books" component={MyBooks} />
				</Route>
			</Router>
		);
	}
}

export default Routes;