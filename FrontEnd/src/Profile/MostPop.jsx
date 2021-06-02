import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
// import jwt from 'jwt-decode';
import './MostPop.css';
// import images from './imagesArray';

const MostPop = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  // const userjwt = jwt(localStorage.getItem('token')); // getting token from local storage
  const [mostPop, setMostPop] = useState('');

  useEffect(() => {
    axios.get(`/Userinfo/${id}`, {
    }).then((resp) => {
      setLoading(false); // set loading to false as it is dont and fetched data
      setMostPop(resp.data.mostPopPhotos);
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
    <div className="pop-photos-view-mp">
      {!isLoading && (
      <div className="pop-container-mp">
        <h4 className="h4-mp">Most popular photos</h4>
        <div className="dropdown-mp" />
        { Object.keys(mostPop).length !== 0 ? (
          <div className="grid-mp" id="pop-exist">
            {mostPop.map((image) => (
              <img className="grid-item-mp" src={image.src} alt="" />
            ))}
          </div>
        ) : (
          <div className="empty-pop-mp" id="pop-false">
            <h3 className="h3-mp">Your most popular photos will appear here.</h3>
            <p className="p-mp">Set your photos to public for more faves, comments and views.</p>
            <p className="p-mp">For even ore exposure, add them to Groups</p>
            <p>
              <Link className="link-mp" to="/cameraroll">
                Go to Camera Roll
              </Link>
            </p>
          </div>
        )}
      </div>
      )}
    </div>
  );
};
export default MostPop;
