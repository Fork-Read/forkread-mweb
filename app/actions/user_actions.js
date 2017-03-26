'use strict';

import Actions from '../constants/actions';
import API from '../api_helper';
import { browserHistory } from 'react-router';

function userCreationSuccess(user){
	return {
		type: Actions.USER_CREATE_SUCCESS,
		data: {
			user
		}
	}
}

function userCreationFailure(msg){
	return {
		type: Actions.USER_CREATE_FAILURE,
		data: {
			user_create_failure: {
				msg
			}
		}
	}
}

function userLoginSuccess(user){
	return {
		type: Actions.USER_LOGIN_SUCCESS,
		data: {
			user
		}
	}
}

function userLoginFailure(msg){
	return {
		type: Actions.USER_LOGIN_FAILURE,
		data: {
			user_login_failure: {
				msg
			}
		}
	}
}

export function createUserRequest(payload){
	
	return function(dispatch){

		let __APICall = API.post('/api/user', {
			payload: payload.user
		}).then(function(user){
				dispatch(userCreationSuccess(user));
				browserHistory.push('/otp');
			}).catch(function(err){
				let errBody;

				err = JSON.parse(JSON.stringify(err));
				errBody = JSON.parse(err.response.text);

				dispatch(userCreationFailure(errBody.message));
			});

		return __APICall;
	}
}

export function initiateUserLogin(payload){

	return function(dispatch){

		let __APICall = API.post('/api/user/login', {
			payload: payload
		}).then(function(user){
				dispatch(userLoginSuccess(user));
				browserHistory.push('/home');
			}).catch(function(err){
				let errBody;

				err = JSON.parse(JSON.stringify(err));
				errBody = JSON.parse(err.response.text);

				dispatch(userLoginFailure(errBody.message));
			});

		return __APICall;
	}
}