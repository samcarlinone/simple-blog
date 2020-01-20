import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default ({article}) => {

  useEffect(() => {
    // Codepen
    window.__CPEmbed()

    // MathJax
    window.mathJaxDirty = true

    if (!window.mathJaxInProgress && typeof MathJax !== 'undefined') TryTypeset()

    async function TryTypeset() {
      window.mathJaxInProgress = true

      while (window.mathJaxDirty) {
        window.mathJaxDirty = false
        await MathJax.typesetPromise()
      }

      window.mathJaxInProgress = false
    }
  }, [article, typeof MathJax])

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