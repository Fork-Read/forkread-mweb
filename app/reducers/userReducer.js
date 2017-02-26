'use strict';

import Actions from '../constants/actions';

const user = (state = {}, action) => {

	switch(action.type){
		case Actions.FETCH_USER_DATA_SUCCESS:
			return {
				...state,
				action.data.user
			}
	}
};

export default user;