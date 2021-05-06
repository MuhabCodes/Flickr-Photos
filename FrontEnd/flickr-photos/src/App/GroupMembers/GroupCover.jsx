import React, {/* { useState } */} from 'react';
import useFetch from '../useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GroupCover.css';

function GroupCover() {
  const { data: group } = useFetch(' http://localhost:8005/Group/1');

  return (
    group ? (
      <div className="group-cover " style={{ backgroundImage: `url(${group.cover})` }}>
        <div className="group-cover-gradient" />
        <div className="group-cover-content">
          <div className="group-avatar" style={{ backgroundImage: `url(${group.Avatar})` }}>
            <div className="loading-animation">
              <div className="animation" />
            </div>
          </div>
          <div className="group-main-info">
            <div className="group-title">
              <h1>
                <a href={group.Url}>
                  {group.Name}
                </a>
              </h1>
              <div className="join-group">
                <button type="button" className="btn btn-light">+ join Group</button>
              </div>
            </div>
            <div className="group-data">
              <div>
                <p className="group-statistics">
                  <a href={`${group.Url}members/`}>
                    {group.Members}
                    {' '}
                    Members
                  </a>
                  <em>&bull;</em>
                </p>
                <p className="group-statistics">
                  <a href={`${group.Url}photos/`}>
                    {group.Photos}
                    {' '}
                    Photos
                  </a>
                  <em>&bull;</em>
                </p>
                <p className="group-statistics">
                  <a href={`${group.Url}Discussions/`}>
                    {group.Discussions}
                    {' '}
                    Discussions
                  </a>
                </p>
              </div>
              <p className="space" />
              <p className="date">
                Group Since
                {' '}
                {group.Date}
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : <h1>Loading...</h1>

  );
}

export default GroupCover;
