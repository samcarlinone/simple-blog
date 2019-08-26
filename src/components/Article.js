import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({article}) => {
  return (
    <div className="article">
      <div className="article-card">
        <ReactMarkdown
          source={article.markdown}
          escapeHtml={false}
        />
      </div>
    </div>
  );
}