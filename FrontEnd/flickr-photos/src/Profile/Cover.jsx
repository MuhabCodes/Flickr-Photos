import React, { useEffect } from 'react';
// import { useParams } from 'react-router';
import useFetch from './usefetch';
import './Cover.css';
// import background from './assets/shapes_heart.png';
// import avatar from './assets/logo192.png';

const CoverArea = () => {
  // const { id } = useParams();
  const { data: Coverinfo } = useFetch('http://localhost:8000/Coverinfo/85826296@N00');
  useEffect(() => {
    if (Coverinfo) {
      if (Coverinfo.coverUrl === '0') {
        Coverinfo.coverUrl = 'https://media.istockphoto.com/photos/white-studio-background-picture-id1040250650?k=6&m=1040250650&s=612x612&w=0&h=Ve0znmMwCbVyo66uIfeSrSYRuHau85oBiVIv1OplATs=';
      }
      if (Coverinfo.avatarUrl === '0') {
        Coverinfo.avatarUrl = 'https://i.pinimg.com/originals/5c/dc/51/5cdc51216b63896814919fe5382bf752.jpg';
      }
      if (Coverinfo.isPro === '0') {
        document.getElementById('pro-badge-cover').style.display = 'none';
      } else {
        document.getElementById('pro-badge-cover').style.display = 'flex';
      }
    }
  });
  return (
    <div className="container-fluid">
      <div className="cover">
        {Coverinfo && (
        <div
          className="changing-cover-photo-bg"
          style={{ backgroundImage: `url(${Coverinfo.coverUrl})` }}
        >
          <div className="cover-photo-gradient" />
          <div className="cover-content">
            <button type="button" className="cover-photo-editbutton">
              <img src="./assets/edit_icon.png" alt="" />
              edit
            </button>

            <div
              className="user-cover-avatar"
              style={{ backgroundImage: `url(${Coverinfo.avatarUrl})` }}
            />
            <div className="title-content">
              <div className="user-cover-title">
                <h1 className="user-cover-name">
                  {Coverinfo.firstName}
                  {' '}
                  {Coverinfo.lastName}
                </h1>
              </div>
              <div className="follow-view">
                <a href="/account/upgrade/po" id="pro-badge-cover">
                  <p className="pro-badge-style">Pro</p>
                </a>
                <p className="user-cover-display-name">
                  {Coverinfo.displayName}
                </p>
                <p className="following-followers-cover-list">
                  {Coverinfo.Followers}
                  {' '}
                  Followers
                  {' '}
                  <em>•</em>
                  {' '}
                  {Coverinfo.Following}
                  {' '}
                  Following
                </p>
                <p className="cover-spacer" />
                <p className="user-cover-photo-count">
                  {Coverinfo.Photos}
                  {' '}
                  photos
                </p>
                <p className="user-cover-join-date">
                  joined
                  {' '}
                  {Coverinfo.Joined}
                </p>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default CoverArea;
