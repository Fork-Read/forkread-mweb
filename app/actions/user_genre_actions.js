'use strict';

import Actions from '../constants/actions';
import API from '../api_helper';

function saveUserGenreSuccess(data){
	return {
		type: Actions.SAVE_USER_GENRE_SUCCESS,
		data: data
	}
}

export function saveUserGenreRequest(payload){
	
	return function(dispatch){

		let __APICall = API.post('/api/user_genre', {
			payload: payload
		}).then(function(data){
				dispatch(saveUserGenreSuccess(data));
			});

		return __APICall;
	}
}