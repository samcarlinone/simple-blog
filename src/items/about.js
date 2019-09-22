import React from 'react';

import Envelope from '../images/baseline-email-24px.svg';
import Octicon from '../images/Octicons-mark-github.svg';

export const about = <>
  <p>Hi, I'm Sam. Computer Science student at Grove City College.</p>
  <p>I've worked on web applications at <a href="https://truefit.io/" target="_blank">Truefit Solutions</a> for the past four summers. At school I focus on computer graphics and game design.</p>
  <div className="sidebar-link">
    <Envelope className="sidebar-link-icon" />
    <a href="mailto: samcarlinone@gmail.com">samcarlinone@gmail.com</a>
  </div>
  <div className="sidebar-link">
    <Octicon className="sidebar-link-icon" viewBox="0 0 1024 1024" />
    <a href="https://github.com/samcarlinone" target="_blank">github.com/samcarlinone</a>
  </div>
</>;