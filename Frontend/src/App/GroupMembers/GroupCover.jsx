import React from 'react';
import useFetch from '../useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GroupCover.css';

function GroupCover() {
  const { data: group } = useFetch(' http://localhost:8000/Group/1'); // Fetch group data

  return (
    group ? (
      // Check that group exists and fetching finished then display group info
      <div className="group-cover " style={{ backgroundImage: `url(${group.cover})` }}>

        {/* Applying cover photo gradient */}
        <div className="group-cover-gradient" />
        <div className="group-cover-content">
          <div className="group-avatar" style={{ backgroundImage: `url(${group.Avatar})` }} />
          <div className="group-main-info">
            <div className="group-title">
              <h1 className="group-title-h1">
                <a href={group.Url} className="group-title-a">
                  {group.Name}
                </a>
              </h1>
              {/* Applying join group buttton */}
              <div className="join-group">
                <button type="button" className="btn btn-light join-group-button">+ Join Group</button>
              </div>
            </div>
            {/* Displaying group data */}
            <div className="group-data">
              <div>
                <p className="group-statistics">
                  <a className="group-statistics-a" href={`${group.Url}members/`}>
                    {group.Members}
                    {' '}
                    Members
                  </a>
                  <em className="group-statistics-em">&bull;</em>
                </p>
                <p className="group-statistics">
                  <a className="group-statistics-a" href={`${group.Url}photos/`}>
                    {group.Photos}
                    {' '}
                    Photos
                  </a>
                  <em className="group-statistics-em">&bull;</em>
                </p>
                <p className="group-statistics">
                  <a className="group-statistics-a" href={`${group.Url}Discussions/`}>
                    {group.Discussions}
                    {' '}
                    Discussions
                  </a>
                </p>
              </div>
              <p className="group-space" />
              <p className="group-date">
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
