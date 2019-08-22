import React from 'react';
import Card from './Card';

export default ({tags, articles, onReadMore}) => {
  const isFiltering = tags.some(tag => tag.active);
  
  const display = isFiltering 
    ? articles.filter(a => a.tags.some(t => tags.find(tag => tag.tag === t).active))
    : articles;

  return (
    <div className="cards-container">
      {display.map(a => <Card article={a} key={a.title} onReadMore={onReadMore} />)}
    </div>
  );
}