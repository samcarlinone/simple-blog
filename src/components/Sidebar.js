import React from 'react';
import Envelope from '../images/baseline-email-24px.svg';
import Octicon from '../images/Octicons-mark-github.svg';

export default ({tags}) => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Code && Comments</h1>
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
      </div>
    </div>
  )
}