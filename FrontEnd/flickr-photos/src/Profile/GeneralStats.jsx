import React from 'react';
import { Link } from 'react-router-dom';
import DataItems from './Stats';

const Stats = () => (
  <div className="general-stats">
    <div className="grid-container">
      {DataItems.map((data) => (
        <div className="item">
          <Link to={data.url}>
            <span>{data.value}</span>
            {data.title}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;
