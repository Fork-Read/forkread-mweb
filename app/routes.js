'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import Homepage from './components/homepage.jsx';

import Login from './authentication/components/login.jsx';
import Signup from './authentication/components/signup.jsx';
import OTP from './authentication/components/otp.jsx';

import GenreSelection from './setup/components/genre_selection.jsx';

import AppHome from './components/app_home.jsx';
import PopularBooks from './components/popular_books.jsx';
import MyBooks from './components/my_books.jsx';

const Routes = (
	<Route path="/" component={App} >
		<IndexRoute component={Homepage} />
		<Route path="/authenticate">
			<Route name="Login" path="/authenticate/login" component={Login} />
			<Route name="Signup" path="/authenticate/signup" component={Signup} />
			<Route name="OTP" path="/authenticate/otp" component={OTP} />
		</Route>
		<Route path="/setup">
			<Route name="GenreSelection" path="/setup/genre_select" component={GenreSelection} />
		</Route>
		<Route path="/home" component={AppHome}>
			<Route name='PopularBooks' path="/home/popular_books" component={PopularBooks} />
			<Route name='MyBooks' path="/home/my_books" component={MyBooks} />
		</Route>
	</Route>
);

export default Routes;