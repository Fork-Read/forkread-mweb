'use strict';

import React from 'react';

class GenreSelection extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div>
        <div className="c-card--half u-pos-has">
          <p className="c-card__heading u-cushion-b pure-u-2-3">
            Select your favourite genre
          </p>
          <p className="c-card__heading pure-u-1-3">
            -&gt;
          </p>
          <div className="c-g-s__item selected">
            Fiction
          </div>
        </div>
        <div className="c-g-s u-cushion-all">
          <div className="c-g-s__item">
            Sci-fi
          </div>
          <div className="c-g-s__item">
            Satire
          </div>
          <div className="c-g-s__item">
            Comics
          </div>
          <div className="c-g-s__item">
            Art
          </div>
          <div className="c-g-s__item">
            Sci-fi
          </div>
          <div className="c-g-s__item">
            Satire
          </div>
          <div className="c-g-s__item">
            Comics
          </div>
          <div className="c-g-s__item">
            Art
          </div>
          <div className="c-g-s__item">
            Sci-fi
          </div>
          <div className="c-g-s__item">
            Satire
          </div>
          <div className="c-g-s__item">
            Comics
          </div>
          <div className="c-g-s__item">
            Art
          </div>
        </div>
      </div>
		);
	}
};

export default GenreSelection;