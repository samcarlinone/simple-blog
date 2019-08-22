import React from 'react';
import {Link} from 'react-router-dom';

export default ({article, onReadMore}) => {
  return (
    <div className="card">
      <img src={article.thumb} className="card-image" />
      <div className="card-content">
        <h2>{article.title}</h2>
        <p>{article.blurb}</p>
        <div className="card-footer">
          <Link to={`item/${article.slug}`} className="card-more">
            Read More ➤
          </Link>
        </div>
      </div>
    </div>
  )
}