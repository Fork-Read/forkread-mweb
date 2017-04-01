'use strict';

import Actions from '../constants/actions';

export default function userGenre (state = {}, action) {
	
	switch(action.type){
		case Actions.SAVE_USER_GENRE_SUCCESS:
			return Object.assign({}, state, action.data);
			break;
		default: return state;
	}
};