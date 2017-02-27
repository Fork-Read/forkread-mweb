'use strict';

import Actions from '../constants/actions';
import API from '../api_helper';

function sendOTPRequestSuccess(){
	return {
		type: Actions.SEND_OTP_SUCCESS,
		data: {
			authentication: {
				type: 'Login',
				otp_sent: true
			}
		}
	}
}

function sendOTPRequestFailure(){
	return {
		type: Actions.SEND_OTP_FAILURE,
		data: {
			authentication: {
				type: 'Login',
				otp_sent_failure: true
			}
		}
	}
}

export function sendOTPRequest(payload){
	
	return function(dispatch){
		
		let __APICall = API.get('/api')
			.then(function(data){
				dispatch(sendOTPRequestSuccess());
			}).catch(function(err){
				dispatch(sendOTPRequestFailure());
			});

		return __APICall;
	}
}