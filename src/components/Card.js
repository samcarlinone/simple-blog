import React from 'react';

export default ({article, onReadMore}) => {
  return (
    <div className="card">
      <img src={article.thumb} className="card-image" />
      <div className="card-content">
        <h2>{article.title}</h2>
        <p>{article.blurb}</p>
        <div className="card-footer">
          <button className="card-more" onClick={() => onReadMore(article)}>
            Read More ➤
          </button>
        </div>
      </div>
    </div>
  )
}