'use strict';

import { map as _map } from 'lodash';

import Actions from '../constants/actions';

export default function genre (state = {}, action) {
	
	switch(action.type){
		case Actions.GET_GENRE_LIST_SUCCESS:
			let data, genreList;

			data = Object.assign({}, state, action.data);

			genreList = _map(data.genres, function(item){
				item.id = item._id.toString();
				delete item._id;
				return item;
			});

			data.genres = genreList

			return Object.assign({}, state, data);
			break;
		default: return state;
	}
};