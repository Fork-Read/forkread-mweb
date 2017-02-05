'use strict';

import React from 'react';

class BookListItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="c-books--list__item pure-g">
				<div className="pure-u-5-24">
					<span className="c-books--list__item--image" style={{backgroundImage: "url('https://tinyurl.com/hdphzhc')"}}>
					</span>
				</div>
				<div className="pure-u-19-24 u-cushion-l">
					<p className="c-books--list__item--name">
						He died with his eyes open
					</p>
					<p className="c-books--list__item--author">
						by Derek Raymond
					</p>
				</div>
			</div>
		);
	}
};

export default BookListItem;