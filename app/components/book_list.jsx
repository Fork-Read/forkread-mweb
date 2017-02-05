'use strict';

import React from 'react';

import BookListItem from './book_list_item.jsx';

class BookList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="c-books--list">
				<BookListItem />
				<BookListItem />
				<BookListItem />
				<BookListItem />
			</div>
		);
	}
};

export default BookList;