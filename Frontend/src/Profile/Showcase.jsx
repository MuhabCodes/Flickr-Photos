import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
// import jwt from 'jwt-decode';
import add from './assets/add-icon.png';
import './Showcase.css';
import AddModalShowcase from './AddModalShowcase';
// import images from './imagesArray';

const Showcase = () => {
  // const history = useHistory();
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const { userId } = useParams();
  const [isLoading, setLoading] = useState(true);
  // const userjwt = jwt(localStorage.getItem('token')); // getting token from local storage
  const [showCase, setShowCase] = useState('');

  useEffect(() => {
    if (userId) {
      axios.get(`/people/${userId}/info/`, {
      }).then((resp) => {
        setLoading(false); // set loading to false as it is dont and fetched data
        setShowCase(resp.data.showCase);
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
    <div className="container-fluid">
      {!isLoading && (
      <div className="showcase-view-scp">
        <div className="showcase-scp">
          <div className="title-container-scp">
            <p className="title-view-scp">
              <span>Showcase</span>
            </p>
          </div>
          <Popup
            trigger={(
              <button type="button" className="add-btn-scp">
                <img src={add} className="add-icon-scp" alt="" />
              </button>
              )}
            modal
            nested
          >
            <AddModalShowcase />
          </Popup>
          { showCase && Object.keys(showCase).length !== 0 ? (
            <div className="showcase-container-scp" id="user-sc-full">
              {showCase.map((image) => (
                <img className="grid-item-scp" src={image.imageUrl} alt="" />
              ))}
            </div>
          )
            : (
              <div className="empty-showcase-scp" id="user-sc-empty">
                <p className="empty-title-scp">This is your showcase.</p>
                <p className="empty-title-scp">Show off up to 25 of your photos.</p>
                <p className="empty-title-scp">
                  <Link className="link-scp" to="/photostream">Get Started</Link>
                </p>
              </div>
            )}
          <div className="divider" />
        </div>
      </div>
      )}
    </div>
  );
};
export default Showcase;
