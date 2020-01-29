import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default ({article}) => {

  useEffect(() => {
    // Codepen
    window.__CPEmbed && window.__CPEmbed()

    // Highlight JS
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [article])

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