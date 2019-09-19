import React, {useState, useEffect} from 'react';
import MobileSidebarTags from './MobileSidebarTags';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const MobileSidebar = ({tags, setTags, location}) => {
  const [open, setOpen] = useState(false);

  let collapsible = true;
  let content;

  if (location.pathname === '/') {
    content = open ? (
      <>
        <div>
          <Link to="/about-me">About Me</Link>
        </div>
        <MobileSidebarTags tags={tags} setTags={setTags} />
      </>
    ) : null;
  } else {
    content = <div>
      <Link to="/">Home</Link>
    </div>;

    collapsible = false;
  }

  return (
    <div className="mobile-sidebar">
      {content}
      { collapsible ? (
        <div onClick={() => setOpen(!open)}>
          <div className="mobile-sidebar-toggle">
            {open ? 'Close' : 'Menu'}
          </div>
        </div>
      ) : null }
    </div>
  )
}

export default withRouter(MobileSidebar);