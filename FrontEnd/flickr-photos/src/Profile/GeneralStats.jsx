import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';

const Stats = () => {
  const { data: stats } = useFetch('http://localhost:8002/generalStats/85@N00');
  return (
    <div className="general-stats">
      {stats && (
      <div className="grid-container">
        <div className="item">
          <Link to="/views">
            <span>{stats.views}</span>
            Views
          </Link>
        </div>
        <div className="item">
          <Link to="/tags">
            <span>{stats.tags}</span>
            Tags
          </Link>
        </div>
        <div className="item">
          <Link to="/geotags">
            <span>{stats.geotags}</span>
            geotags
          </Link>
        </div>
        <div className="item">
          <Link to="/faves">
            <span>{stats.faves}</span>
            faves
          </Link>
        </div>
        <div className="item">
          <Link to="/groups">
            <span>{stats.groups}</span>
            groups
          </Link>
        </div>
      </div>
      )}
    </div>
  );
};
export default Stats;
