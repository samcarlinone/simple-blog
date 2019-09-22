import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";

import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import CardList from './CardList';
import FourOhFour from './FourOhFour';
import AboutMe from './AboutMe';
import {useWindowDimensions} from './utility';

import {articles} from '../items/articles';
import {tagList} from './tags';
import Article from './Article';

function App ({history}) {
  const [tags, setTags] = useState(tagList.map(tag => ({tag, active: false})));

  const {width} = useWindowDimensions();

  return <>
    {width < 860 
      ? <MobileSidebar tags={tags} setTags={setTags} />
      : <Sidebar tags={tags} setTags={setTags} />
    }

    <Route 
      path="/item/:slug" 
      render={({match}) => {
        const article = articles.find(a => a.slug === match.params.slug);

        if (article) {
          return <Article article={article} />;
        }
          
        history.push('/not-found');
      }}
    />

    <Route
      path="/about-me"
      exact
      component={AboutMe}
    />

    <Route
      path="/not-found"
      exact
      component={FourOhFour}
    />

    <Route
      path="/"
      exact
      render={() => <CardList articles={articles} tags={tags} />}
    />
  </>;
}

const ComposedApp = withRouter(App);

function RoutedApp () {
  return <Router>
    <ComposedApp />
  </Router>
}

ReactDOM.render(
  <RoutedApp />,
  document.getElementById('main')
);