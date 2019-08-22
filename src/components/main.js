import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';


import Sidebar from './Sidebar';
import CardList from './CardList';

import {articles} from './articles';
import {tagList} from './tags';
import Article from './Article';

const BLOG_TITLE = 'C & C';

function App () {
  const [tags, setTags] = useState(tagList.map(tag => ({tag, active: false})));
  const [reading, setReading] = useState(null);

  useEffect(() => {
    if (reading) {
      history.pushState(
        reading,
        `${BLOG_TITLE} | ${reading.title}`,
        `${reading.slug}`
      );
    } else {
      history.pushState(null, BLOG_TITLE, '');
    }
  });

  const onNav = () => {
    const path = window.location.pathname.slice(1);
    setReading(articles.find(a => a.slug === path));
  }

  useEffect(() => {
    onNav();

    window.addEventListener('popstate', onNav);

    return () => window.removeEventListener('popstate', onNav);
  }, []);

  return <>
    {reading
      ? <Article article={reading} />
      : <CardList articles={articles} tags={tags} onReadMore={setReading} />
    }
    <Sidebar tags={tags} setTags={setTags} />
  </>;
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);