import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Sidebar from './Sidebar';

import {articles} from './articles';

ReactDOM.render(
  <>
    <div className="cards-container">
      {articles.map(a => <Card article={a} key={a.title} />)}
    </div>
    <Sidebar />
  </>,
  document.getElementById('main')
);