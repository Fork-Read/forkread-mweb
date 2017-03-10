'use strict';

import Actions from '../constants/actions';

export default function authentication (state = {}, action) {
	console.log(action.type);
	
	switch(action.type){
		case Actions.USER_CREATE_SUCCESS:
			return Object.assign({}, state, action.data);
			break;
		case Actions.USER_CREATE_FAILURE:
			return Object.assign({}, state, action.data);
			break;
		default: return state;
	}
};