import React from 'react';
// import FollowersCard from './FollowersCard';
import './FollowersPage.css';
import configData from '../config.json';
import useFetch from '../useFetch';

function FollowersPage() {
  const { data: Followers } = useFetch(`${configData.SERVER_URL}/Followers`);
  console.log(Followers);
  return (
    <div>
      <h1 className="follower-title">Sandy follower</h1>
      {/* <FollowersCard Followers={Followers} /> */}
    </div>
  );
}

export default FollowersPage;
