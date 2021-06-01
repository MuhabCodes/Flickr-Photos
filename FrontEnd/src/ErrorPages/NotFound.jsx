import React from 'react';
import './NotFound.css';
import NotFoundExplore from './NotFoundExplore';
import useFetch from '../useFetch';
import configData from '../config.json';

const NotFound = () => {
  const { data: images, isPending, error } = useFetch(`${configData.SERVER_URL}/photosExplore`);
  return (
    <div className="main-error-page">
      <div className="main-404-container">
        <div className="upper-404-container">
          { /* container of all text (Error Code and paragraph) */ }
          <h2 className="h2-404">
            404
          </h2>
          <h3 className="h3-404">
            This is not the page you&#39;re looking for.
          </h3>
          <p className="paragraph-404">
            It appears the page you seek doesn’t exist.
            <br />
            Here are some of today’s best photos instead:
          </p>
        </div>
        {/* Copied from net ninja react tutorial */}
        { error && <div>{ error }</div>}
        { isPending && <div>Loading</div>}
        { images && <NotFoundExplore images={images} /> }
      </div>
    </div>
  );
};
export default NotFound;
