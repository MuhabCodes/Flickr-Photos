import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FollowersCard from './FollowersCard';
import './FollowersPage.css';

function FollowersPage() {
  const [followers, setfollowers] = useState([]);
  useEffect(() => {
    axios.get('/followers')
      .then((items) => {
        setfollowers(items.data);
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
