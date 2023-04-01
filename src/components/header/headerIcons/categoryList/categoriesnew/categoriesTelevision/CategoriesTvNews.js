import React from 'react'
import PlayConsol from './PlayConsol';
import Plays from './Plays';
import TvAmount from './TvAmount';

const CategoriesTvNews = () => {
   return (
      <div>
        <div className="categories-news-tv">
          <div className="categories-news-tv-masonary">
            <div className="categories-news-tv-masonaryColumn">
              <TvAmount />
              <PlayConsol />
              <Plays />
            </div>
          </div>
          <div>bos</div>
        </div>
      </div>
    );
}

export default CategoriesTvNews