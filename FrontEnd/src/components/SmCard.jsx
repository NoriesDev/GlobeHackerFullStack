import './SmCardStyling.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

import LgCard from './LgCard';

export default function SmCard( { title, date, author, imageurl , description,  article, dining, adventures, shopping, index } ) {
  const [showFullArticle, setShowFullArticle] = useState(false);
  const toggleFullArticle = () => {
    setShowFullArticle(!showFullArticle);
  };
return (
  <div className='outer-div'>
  {showFullArticle ? (
    <LgCard             
    key={index}
    title={title}
    date={date}
    author={author}
    article={article}
    imageurl={imageurl}
    dining={dining}
    adventures={adventures}
    shopping={shopping}
    />
  ) : (
    <div className="container" onClick={toggleFullArticle}>
      <img className="img" src={imageurl} alt={description} />
      <div className='rightCard'>
        <h3 className="title">{title}</h3>
        <div className='float'>
          <p className="date">{date}</p>
          <p className="author">{author}</p>
        </div>
        <div className='article'>{article}</div>
        <button className='drop-btn'>
          {showFullArticle ? 'Show Less' : 'Full Article'}
        </button>
      </div>
    </div>
  )}
</div>
);
}

SmCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.number,
  author: PropTypes.string,
  imageurl: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.string,
  dining: PropTypes.string,
  adventures: PropTypes.string,
  shopping: PropTypes.string,
};