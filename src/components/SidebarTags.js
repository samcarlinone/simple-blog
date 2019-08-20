import React from 'react';
import {tagIcons} from './tags';

export default ({tags, setTags}) => {
  return (
    <div className="sidebartags-container">
      <h3>Tags</h3>
      <div className="sidebartags">
        {tags.map(t =>
          <div 
            key={t.tag}
            className={`sidebartags-tag ${t.active ? 'active' : ''}`}
            onClick={() => {
              const newTags = [...tags];
              const target = newTags.find(nt => nt.tag === t.tag);
              target.active = !target.active;
              setTags(newTags);
            }}
          >
            {tagIcons[t.tag]}
            {t.tag}
          </div>
        )}
      </div>
    </div>
  );
}