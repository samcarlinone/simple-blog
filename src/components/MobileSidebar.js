import React, {useState, useEffect} from 'react';
import Envelope from '../images/baseline-email-24px.svg';
import Octicon from '../images/Octicons-mark-github.svg';
import SidebarTags from './SidebarTags';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const MobileSidebar = ({tags, setTags, location}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Close the menu if the user clicks elsewhere
    if (!open) return;

    function close() {
      setOpen(false);
    }

    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [open]);

  let sidebarWidget = null;

  if (location.pathname === '/')
    sidebarWidget = <SidebarTags tags={tags} setTags={setTags} />;

  if (location.pathname.startsWith('/item/'))
    sidebarWidget = null;

  const content = <>
    <div>
      <Link to="/">Home</Link>
    </div>
  </>;

  return (
    <div className="mobile-sidebar">
      {open ? content : null}
      <div onClick={() => setOpen(!open)}>
        <div className="mobile-sidebar-toggle">
          {open ? 'Close' : 'Menu'}
        </div>
      </div>
      {/* {sidebarWidget}
      <div className="sidebar-about">
        <p>Hi, I'm Sam. Computer Science student at Grove City College.</p>
        <p>I've specialized in web applications and game development. And have wide experience in many areas, from algorithms to robotics.</p>
        <div className="sidebar-link">
          <Envelope className="sidebar-link-icon" />
          <a href="mailto: samcarlinone@gmail.com">samcarlinone@gmail.com</a>
        </div>
        <div className="sidebar-link">
          <Octicon className="sidebar-link-icon" viewBox="0 0 1024 1024" />
          <a href="https://github.com/samcarlinone" target="_blank">github.com/samcarlinone</a>
        </div>
      </div> */}
    </div>
  )
}

export default withRouter(MobileSidebar);