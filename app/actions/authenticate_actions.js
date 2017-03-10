'use strict';

import Actions from '../constants/actions';
import API from '../api_helper';

function sendOTPRequestSuccess(type){
	return {
		type: Actions.SEND_OTP_SUCCESS,
		data: {
			authentication: {
				type: type,
				otp_sent: true
			}
		}
	}
}

function sendOTPRequestFailure(type){
	return {
		type: Actions.SEND_OTP_FAILURE,
		data: {
			authentication: {
				type: type,
				otp_sent_failure: true
			}
		}
	}
}

export function sendOTPRequest(payload){
	
	return function(dispatch){
		
		let __APICall = API.post('/api/authentication/otp', {
			payload: {
				number: payload.number
			}
		}).then(function(data){
				dispatch(sendOTPRequestSuccess(payload.type));
			}).catch(function(err){
				dispatch(sendOTPRequestFailure(payload.type));
			});

		return __APICall;
	}
}