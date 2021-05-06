import React from 'react';
import './NotFound.css';
import NotFoundExplore from './NotFoundExplore';

const NotFound = () => (
  <div className="mainErrorPage">
    <div className="main404Container">
      <div className="upper404Container">
        { /* container of all text (Error Code and paragraph) */ }
        <h2 className="H2404">
          404
        </h2>
        <h3 className="H3404">
          This is not the page you&#39;re looking for.
        </h3>
        <p className="Paragraph404">
          It appears the photostream you seek doesn’t exist.
          <br />
          Here are some of today’s best photos instead:
        </p>
      </div>
      <NotFoundExplore />
    </div>
  </div>
);

export default NotFound;
