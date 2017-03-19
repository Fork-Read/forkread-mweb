'use strict';

import Actions from '../constants/actions';
import API from '../api_helper';

function getGenreListSuccess(data){
	return {
		type: Actions.GET_GENRE_LIST_SUCCESS,
		data: data
	}
}

export function getAllGenreRequest(payload){
	
	return function(dispatch){

		let __APICall = API.get('/api/genre', {
			query: payload
		}).then(function(data){
				dispatch(getGenreListSuccess(data));
			});

		return __APICall;
	}
}