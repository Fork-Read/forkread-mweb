'use strict';

import Actions from '../constants/actions';

export default function user (state = {}, action) {
	
	switch(action.type){
		case Actions.USER_CREATE_SUCCESS:
		case Actions.USER_LOGIN_SUCCESS:
			return Object.assign({}, state, action.data);
			break;
		case Actions.USER_CREATE_FAILURE:
		case Actions.USER_LOGIN_FAILURE:
			return Object.assign({}, state, action.data);
			break;
		default: return state;
	}
};