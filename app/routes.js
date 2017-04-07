'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import Homepage from './components/homepage.jsx';
import Login from './setup/components/login.jsx';
import Signup from './setup/components/signup.jsx';
import OTP from './setup/components/otp.jsx';
import GenreSelection from './setup/components/genre_selection.jsx';
import AppHome from './components/app_home.jsx';
import PopularBooks from './components/popular_books.jsx';
import MyBooks from './components/my_books.jsx';

const Routes = (
	<Route path="/" component={App} >
		<IndexRoute component={Homepage} />
		<Route name='Signup' path="/signup" component={Signup} />
		<Route name='Login' path="/login" component={Login} />
		<Route name='OTPVerify' path="/otp" component={OTP} />
		<Route name='GenreSelection' path="/genre_select" component={GenreSelection} />
		<Route path="/home" component={AppHome}>
			<Route name='PopularBooks' path="/home/popular_books" component={PopularBooks} />
			<Route name='MyBooks' path="/home/my_books" component={MyBooks} />
		</Route>
	</Route>
);

export default Routes;