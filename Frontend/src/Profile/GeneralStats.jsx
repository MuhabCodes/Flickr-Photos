import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './GeneralStats.css';

const Stats = () => {
  axios.defaults.baseURL = 'https://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const { userId } = useParams();
  // const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [tags, setTags] = useState('');
  const [faves, setFaves] = useState('');

  useEffect(() => {
    if (userId) {
      axios.get(`/people/${userId}/info/`, {
      }).then((resp) => {
        setLoading(false); // set loading to false as it is dont and fetched data
        setTags(resp.data.tags);
        setFaves(resp.data.favs);
        return resp.data;
      }).catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        // history.push('/login');
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        // setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
      });
    }
  }, [userId]);
  return (
    <div className="general-stats-gsp">
      {!isLoading && (
      <div className="grid-container-gsp">
        <div className="item-gsp">
          <Link className="link-gsp" to="/tags">
            <span className="span-gsp">{tags}</span>
            Tags
          </Link>
        </div>
        <div className="item-gsp">
          <Link className="link-gsp" to="/faves">
            <span className="span-gsp">{faves}</span>
            faves
          </Link>
        </div>
      </div>
      )}
    </div>
  );
};
export default Stats;
