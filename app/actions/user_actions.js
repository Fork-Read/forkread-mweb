'use strict';

import Actions from '../constants/actions';
import API from '../api_helper';
import { browserHistory } from 'react-router';

function userCreationSuccess(user){
	return {
		type: Actions.USER_CREATE_SUCCESS,
		data: {
			user: user
		}
	}
}

function userCreationFailure(msg){
	return {
		type: Actions.USER_CREATE_FAILURE,
		data: {
			user_create_failure: {
				msg: msg
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