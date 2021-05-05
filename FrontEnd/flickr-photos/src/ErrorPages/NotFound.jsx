import React from 'react';
import './NotFound.css';

const NotFound = () => (
  <div className="mainErrorPage">
    <div className="main404Container">
      <div className="upper404Container">
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
      <div className="lower404Container">
        Sad
      </div>
    </div>
  </div>
);

export default NotFound;
