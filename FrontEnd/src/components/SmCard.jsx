import './SmCardStyling.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

import LgCard from './LgCard';

export default function SmCard( {title,date, author, imageUrl , description,  article, post} ) {
  const [showFullArticle, setShowFullArticle] = useState(false);

  const toggleFullArticle = () => {
    setShowFullArticle(!showFullArticle);
  };
return (
  <div className='outer-div'>
  {showFullArticle ? (
    <LgCard
      title={post.fields.title}
      date={post.fields.date}
      author={post.fields.author}
      imageUrl={post.fields.imageUrl}
      article={post.fields.article}
      dining={post.fields.dining}
      shopping={post.fields.shopping}
      adventures={post.fields.adventures}
    />
  ) : (
    <div className="container" onClick={toggleFullArticle}>
      <img className="img" src={imageUrl} alt={description} />
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
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.string,
  post: PropTypes.object,
};