import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';
import './GeneralStats.css';

const Stats = () => {
  const { data: stats } = useFetch('http://localhost:8000/generalStats/85@N00');
  return (
    <div className="general-stats-gsp">
      {stats && (
      <div className="grid-container-gsp">
        <div className="item-gsp">
          <Link className="link-gsp" to="/views">
            <span className="span-gsp">{stats.views}</span>
            Views
          </Link>
        </div>
        <div className="item-gsp">
          <Link className="link-gsp" to="/tags">
            <span className="span-gsp">{stats.tags}</span>
            Tags
          </Link>
        </div>
        <div className="item-gsp">
          <Link className="link-gsp" to="/geotags">
            <span className="span-gsp">{stats.geotags}</span>
            geotags
          </Link>
        </div>
        <div className="item-gsp">
          <Link className="link-gsp" to="/faves">
            <span className="span-gsp">{stats.faves}</span>
            faves
          </Link>
        </div>
        <div className="item-gsp">
          <Link className="link-gsp" to="/groups">
            <span className="span-gsp">{stats.groups}</span>
            groups
          </Link>
        </div>
      </div>
      )}
    </div>
  );
};
export default Stats;
