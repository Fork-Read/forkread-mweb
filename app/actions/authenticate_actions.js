'use strict';

import Actions from '../constants/actions';
import API from '../api_helper';

function sendOTPRequestSuccess(){
	return {
		type: Actions.SEND_OTP_SUCCESS,
		data: {
			otp_sent: true
		}
	}
}

function sendOTPRequestFailure(){
	return {
		type: Actions.SEND_OTP_FAILURE,
		data: {
			otp_sent_failure: true
		}
	}
}

function OTPVerificationSuccess(){
	return {
		type: Actions.SEND_OTP_SUCCESS,
		data: {
			otp_verified: true
		}
	}
}

function OTPVerificationFailure(message){
	return {
		type: Actions.SEND_OTP_FAILURE,
		data: {
			otp_verification_failed: {
				msg: message
			}
		}
	}
}

export function sendOTPRequest(payload){
	
	return function(dispatch){
		
		let __APICall = API.post('/api/authentication/otp_send', {
			payload: {
				number: payload.number
			}
		}).then(function(data){
				dispatch(sendOTPRequestSuccess());
			}).catch(function(err){
				dispatch(sendOTPRequestFailure());
			});

		return __APICall;
	}
}

export function sendOTPVerifyRequest(payload, successCallback){

	return function(dispatch){

		let __APICall = API.post('/api/authentication/otp_verify', {
			payload: payload
		}).then(function(data){
			dispatch(OTPVerificationSuccess());
			if(successCallback){
				successCallback();
			}
		}).catch(function(err){

			let errBody;

			err = JSON.parse(JSON.stringify(err));
			errBody = JSON.parse(err.response.text);
			
			dispatch(OTPVerificationFailure(errBody.message));
		});
	}
}