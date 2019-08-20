import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Sidebar from './Sidebar';

import {articles} from './articles';
import {tagList} from './tags';

function App () {
  const [tags, setTags] = useState(tagList.map(tag => ({tag, active: false})));

  const isFiltering = tags.some(tag => tag.active);
  
  const display = isFiltering 
    ? articles.filter(a => a.tags.some(t => tags.find(tag => tag.tag === t).active))
    : articles;

  return <>
    <div className="cards-container">
      {display.map(a => <Card article={a} key={a.title} />)}
    </div>
    <Sidebar tags={tags} setTags={setTags} />
  </>;
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);