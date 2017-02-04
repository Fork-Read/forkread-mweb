'use strict';

import React from 'react';

import TabContainer from './tabs/tab_container.jsx';

class Home extends React.Component{
	constructor(props){
		super(props);
	}

	getTabConfig(){
		return [
			{
				name: 'Popular Books',
				linkTo: '/home/popular_books'
			},
			{
				name: 'My Books',
				linkTo: '/home/my_books'
			}
		];
	}

	render(){
		let tabConfig;

		tabConfig = this.getTabConfig();

		return (
			<div className="c-section u-cushion-all">
				<TabContainer tabConfig={tabConfig} />
				{this.props.children}
			</div>
		);
	}
};

export default Home;