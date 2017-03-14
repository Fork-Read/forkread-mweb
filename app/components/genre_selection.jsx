'use strict';

import React from 'react';
import { map as _map } from 'lodash';

class GenreSelection extends React.Component{
	constructor(props) {
		super(props);

    this.state = {
      genre_list : [
        {
          id: 1,
          name: 'Fiction',
          description: 'This is the description',
          selected: false
        },
        {
          id: 2,
          name: 'Sc-fi',
          description: 'This is the description',
          selected: false
        }
      ]
    }
	}

  toggleSelection(id){
    let genre_list;

    genre_list = _map(this.state.genre_list, function(item){
      if(item.id === id){
        item.selected = !item.selected;
      }

      return item;
    });

    this.setState({
      genre_list
    });
  }

  getGenreLayout(){
    let __self, __layouts;

    __self = this;

    __layouts = _map(this.state.genre_list, function(item, index){
      let activeClass = item.selected ? 'active' : '';

      return (
        <div
          key={index}
          className="c-g-s__item pure-u-sm-1 u-pos-has"
          onClick={__self.toggleSelection.bind(__self, item.id)}>
          <div className="c-g-s__item--content">
            <p className="c-g-s__name">{item.name}</p>
            <p className="c-g-s__caption">{item.description}</p>
          </div>
          <div className={`c-g-s__item--action u-pos-r-m ${activeClass}`}>
            <i className="ion-ios-checkmark"></i>
          </div>
        </div>
      );
    });

    return __layouts;
  }

	render() {

		return(
			<div>
        <div className="c-card--clear">
          <p className="c-card__heading u-cushion-b pure-u-2-3">
            Select your favourite genre
          </p>
          <div className="c-g-s pure-u-1">
            {this.getGenreLayout()}
          </div>
        </div>
      </div>
		);
	}
};

export default GenreSelection;