'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { map as _map, filter as _filter, findIndex as _findIndex } from 'lodash';
import { Link } from 'react-router';

import GenreSelectionItem from './genre_selection_item.jsx';

import { getAllGenreRequest } from '../actions/genre_actions';
import { saveUserGenreRequest } from '../actions/user_genre_actions';

const mapDispatchToProps = function(dispatch) {
  return {
    getAllGenres: function(offset, limit) {
      let __payload;

      __payload = Object.assign({}, {
        offset,
        limit
      });

      dispatch(getAllGenreRequest(__payload));
    },
    saveUserGenres: function(genre_list) {
      let __payload;

      __payload = Object.assign({}, {
        genre_list
      });

      dispatch(saveUserGenreRequest(__payload));
    }
  }
};

const mapStateToProps = function(state) {
  return {
    genres: state.genreReducer.genres,
    total: state.genreReducer.total,
    limit: state.genreReducer.limit,
    offset: state.genreReducer.offset
  }
}

class GenreSelection extends React.Component{
	constructor(props) {
		super(props);

    this.state = {
      selectedGenreIds: []
    }
	}

  componentDidMount(){
    this.props.getAllGenres(0, 20);
  }

  toggleSelection(id){
    let __selectedGenreIds, existingIndex;

    __selectedGenreIds = this.state.selectedGenreIds;

    __selectedGenreIds = _filter(__selectedGenreIds, function(item){
      return item !== id;
    });

    if(__selectedGenreIds.length === this.state.selectedGenreIds.length){  // The id is not in array
      __selectedGenreIds.push(id);
    }

    this.setState({
      selectedGenreIds: __selectedGenreIds
    });
  }

  getGenreLayout(){
    let __self, __layouts;

    __self = this;

    __layouts = _map(this.props.genres, function(item, index){
      let selectedIndex = _findIndex(__self.state.selectedGenreIds, function(selectedItem){
        return selectedItem === item.id;
      });

      return (
        <GenreSelectionItem
          key={index}
          genreDetails={item}
          isSelected={selectedIndex !== -1}
          toggleSelection={__self.toggleSelection.bind(__self)} />
      );
    });

    return __layouts;
  }

  saveUserGenrePreference(){
    this.props.saveUserGenres(this.state.selectedGenreIds);
  }

	render() {
    let disabledClass;

    disabledClass = this.state.selectedGenreIds.length ? '' : 'disabled'; 

		return(
			<div>
        <div className="c-card--clear">
          <p className="c-card__heading u-cushion-b pure-u-2-3">
            Select your favourite genre
          </p>
          <div className="c-g-s pure-u-1">
            {this.getGenreLayout()}
          </div>
          <div className="u-c-fixed--b u-c-whitebg">
            <Link to='/home/popular_books'>
              <button
                disabled={!this.state.selectedGenreIds.length}
                className={`c-btn--primary ${disabledClass}`}
                onClick={this.saveUserGenrePreference.bind(this)}>
                Done
              </button>
            </Link>
          </div>
        </div>
      </div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreSelection);





