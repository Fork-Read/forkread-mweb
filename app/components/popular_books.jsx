'use strict';

import React from 'react';

import BookList from './book_list.jsx';

class PopularBooks extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div>
				<h2>Popular Books</h2>
				<BookList />
			</div>
		);
	}
};

export default PopularBooks;