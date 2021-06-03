import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './GeneralStats.css';

const Stats = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [views, setViews] = useState('');
  const [tags, setTags] = useState('');
  const [faves, setFaves] = useState('');

  useEffect(() => {
    axios.get(`/Userinfo/${id}`, {
    }).then((resp) => {
      setLoading(false); // set loading to false as it is dont and fetched data
      resp.data.generalStats.map((item) => {
        setViews(item.views);
        setTags(item.tags);
        setFaves(item.faves);
        return resp.data;
      });
      return resp.data;
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        history.push('/login');
      } else {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
      }
    });
  }, []);
  return (
    <div className="general-stats-gsp">
      {!isLoading && (
      <div className="grid-container-gsp">
        <div className="item-gsp">
          <Link className="link-gsp" to="/views">
            <span className="span-gsp">{views}</span>
            Views
          </Link>
        </div>
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
