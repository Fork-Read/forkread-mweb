'use strict';

import Actions from '../constants/actions';

export default function authentication (state = {}, action) {
	console.log(action.type);
	
	switch(action.type){
		case Actions.SEND_OTP_SUCCESS:
			return Object.assign({}, state, action.data);
			break;
		case Actions.SEND_OTP_FAILURE:
			return Object.assign({}, state, action.data);
			break;
		default: return state;
	}
};