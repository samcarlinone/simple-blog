import React from 'react';

import {about} from '../items/about';

export default ({article}) => {
  return (
    <div className="article">
      <div className="article-card">
        {about}
      </div>
    </div>
  );
}