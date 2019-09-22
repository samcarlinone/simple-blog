import React from 'react';
import Envelope from '../images/baseline-email-24px.svg';
import Octicon from '../images/Octicons-mark-github.svg';
import SidebarTags from './SidebarTags';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {about} from '../items/about';

const Sidebar = ({tags, setTags, location}) => {
  let sidebarWidget = null;

  if (location.pathname === '/')
    sidebarWidget = <SidebarTags tags={tags} setTags={setTags} />;

  if (location.pathname.startsWith('/item/'))
    sidebarWidget = null;

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">
        <Link to="/" className="sidebar-title-anchor">
          Code && Comments
        </Link>
      </h1>
      {sidebarWidget}
      <div className="sidebar-about">
        {about}
      </div>
    </div>
  )
}

export default withRouter(Sidebar);