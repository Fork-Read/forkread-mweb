'use strict';

import Actions from '../constants/actions';

const user = (state = {}, action) => {

	switch(action.type){
		case Actions.FETCH_USER_DATA_SUCCESS:
			return Object.assign({}, state, {
				user: action.data.user
			});
			break;
		default: return state;
	}
};

export default user;