import React from 'react';
import {tagIcons} from './tags';

export default ({tags, setTags}) => {
  return (
    <div className="mobile-sidebartags">
      <div>
        Tags
      </div>
      {tags.map(t =>
        <div 
          key={t.tag}
          className={`mobile-sidebartags-tag ${t.active ? 'active' : ''}`}
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
  );
}