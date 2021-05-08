import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';
import './GeneralStats.css';

const Stats = () => {
  const { data: stats } = useFetch('http://localhost:8000/generalStats/85@N00');
  return (
    <div className="general-stats-gsP">
      {stats && (
      <div className="grid-container-gsP">
        <div className="item-gsP">
          <Link className="link-gsP" to="/views">
            <span className="span-gsP">{stats.views}</span>
            Views
          </Link>
        </div>
        <div className="item-gsP">
          <Link className="link-gsP" to="/tags">
            <span className="span-gsP">{stats.tags}</span>
            Tags
          </Link>
        </div>
        <div className="item-gsP">
          <Link className="link-gsP" to="/geotags">
            <span className="span-gsP">{stats.geotags}</span>
            geotags
          </Link>
        </div>
        <div className="item-gsP">
          <Link className="link-gsP" to="/faves">
            <span className="span-gsP">{stats.faves}</span>
            faves
          </Link>
        </div>
        <div className="item-gsP">
          <Link className="link-gsP" to="/groups">
            <span className="span-gsP">{stats.groups}</span>
            groups
          </Link>
        </div>
      </div>
      )}
    </div>
  );
};
export default Stats;
