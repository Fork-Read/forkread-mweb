'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.jsx';
import Homepage from './common/components/homepage.jsx';

import Login from './authentication/components/login.jsx';
import Signup from './authentication/components/signup.jsx';
import OTP from './authentication/components/otp.jsx';

import GenreSelection from './setup/components/genre_selection.jsx';

import HomeApp from './home/components/app.jsx';
import PopularBooks from './home/components/popular_books.jsx';
import MyBooks from './home/components/my_books.jsx';

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
		<Route path="/home" component={HomeApp}>
			<Route name='PopularBooks' path="/home/popular_books" component={PopularBooks} />
			<Route name='MyBooks' path="/home/my_books" component={MyBooks} />
		</Route>
	</Route>
);

export default Routes;