import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import FollowersCard from './FollowersCard';
import './FollowersPage.css';

/**
 * return list of followers for a certain user according to their id
 * @module
 * @function FollowersPage
 * @example </FollowersPage>
 * @returns {null} - returns list of followers
 */
function FollowersPage() {
  const { userid } = useParams();
  const [followers, setfollowers] = useState([]);
  useEffect(() => {
    axios.get(`/user/${userid}/followers`)
      .then((items) => {
        setfollowers(items.data.followers);
      }).catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(followers);
  return (
    <div>
      <FollowersCard followers={followers} />
    </div>
  );
}

export default FollowersPage;
