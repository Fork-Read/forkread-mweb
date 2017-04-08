'use strict';

import React from 'react';

import BookList from './book_list.jsx';

class MyBooks extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div>
				<h2>My Books</h2>
				<BookList />
			</div>
		);
	}
};

export default MyBooks;