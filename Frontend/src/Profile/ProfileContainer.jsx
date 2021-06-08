import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
// import SubNavBar from './SubNavBar';
import AboutBio from './AboutBio';
import Stats from './GeneralStats';
import Showcase from './Showcase';
import UserInfo from './UserInfo';
// import MostPop from './MostPop';
// import TestimonialsArea from './Testimonials';
import './ProfileContainer.css';

// const { data, isPending, Error } = useFetch('http://localhost:8000/aboutbio');
/**
 * Profile container component contains all other components and renders them according
 * to conditions whether it's the current user or different user
 * @component ProfileContainer
 * @function ProfileContainer
 * @example <ProfileContainer/>
 * @returns profile container filled with all other components
 */
const ProfileContainer = () => {
  axios.defaults.baseURL = 'https://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const { userId } = useParams();
  // const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const userjwt = jwt(localStorage.getItem('token')); // getting token from local storage
  const [bio, setBio] = useState('');
  // const [mostPop, setMostPop] = useState('');
  const [showcase, setShowcase] = useState('');
  const currUser = (userId === userjwt.userId);
  useEffect(() => {
    axios.defaults.baseURL = 'https://api.flick.photos';
    if (userId) {
      axios.get(`/people/${userId}/info/`, {
      }).then((resp) => {
        setLoading(false); // set loading to false as it is dont and fetched data
        // setMostPop(resp.data.mostPopPhotos);
        setShowcase(resp.data.showCase);
        setBio(resp.data.person.description);
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
    <div>
      {!isLoading && (
      <div className="fluid-profile-container-pp">
        <div className="profile-bio-page-pp">
          <div className="bio-description-section-pp">
            {((currUser && bio === '0') || (bio !== '0')) && (
            <AboutBio />)}
            {((currUser && showcase.length === 0) || (showcase.length !== 0)) && (<Showcase />)}
            <UserInfo />
            <Stats />
          </div>
        </div>
        {/* {((currUser && mostPop.length === 0) || (mostPop.length !== 0)) && <MostPop />} */}
      </div>
      )}
    </div>
  );
};
export default ProfileContainer;
