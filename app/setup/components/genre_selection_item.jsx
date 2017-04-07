'use strict';

import React from 'react';

class GenreSelectionItem extends React.Component{
	constructor(props){
		super(props);
	}

	toggleItemSelection(){
		if(this.props.toggleSelection){
			this.props.toggleSelection(this.props.genreDetails.id);
		}
	}

	render(){
		let __selectedClass;

		__selectedClass = this.props.isSelected ? 'active' : '';

		return (
			<div
	      className="c-g-s__item pure-u-sm-1 u-pos-has"
	      onClick={this.toggleItemSelection.bind(this)}>
	      <div className="c-g-s__item--content pure-u-20-24">
	        <p className="c-g-s__name">{this.props.genreDetails.name}</p>
	        <p className="c-g-s__caption">{this.props.genreDetails.description}</p>
	      </div>
	      <div className={`c-g-s__item--action u-pos-r-m ${__selectedClass}`}>
	        <i className="ion-ios-checkmark"></i>
	      </div>
	    </div>
    )
	}
};

GenreSelectionItem.propTypes = {
	genreDetails: React.PropTypes.object.isRequired,
	isSelected: React.PropTypes.bool,
	toggleSelection: React.PropTypes.func
};

GenreSelectionItem.defaultProps = {
	isSelected: false
};

export default GenreSelectionItem;