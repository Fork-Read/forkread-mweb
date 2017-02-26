'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.jsx';
import Homepage from './components/homepage.jsx';
import Login from './components/login.jsx';
import OTP from './components/otp.jsx';
import GenreSelection from './components/genre_selection.jsx';
import AppHome from './components/app_home.jsx';
import PopularBooks from './components/popular_books.jsx';
import MyBooks from './components/my_books.jsx';

const Routes = (
	<Route path="/" component={App} >
		<IndexRoute component={Homepage} />
		<Route path="/login" component={Login} />
		<Route path="/otp" component={OTP} />
		<Route path="/genre_select" component={GenreSelection} />
		<Route path="/home" component={AppHome}>
			<Route path="/home/popular_books" component={PopularBooks} />
			<Route path="/home/my_books" component={MyBooks} />
		</Route>
	</Route>
);

export default Routes;