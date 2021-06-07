import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import edit from './assets/edit_icon.png';
import './AboutBio.css';

const AboutBio = () => {
  axios.defaults.baseURL = 'api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const { userId } = useParams();
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const userjwt = jwt(localStorage.getItem('token')); // getting token from local storage
  const [text, setText] = useState('');
  const currUser = (userId === userjwt.userId);
  useEffect(() => {
    axios.get(`/people/${userId}/info/`, {
    }).then((resp) => {
      setLoading(false); // set loading to false as it is dont and fetched data
      resp.data.person.map((item) => {
        if (item.description === null) setText('Write a little about yourself');
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
  function Read() {
    //  Read function that checks whether user wants to read more or read less
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const btnText = document.getElementById('readbtn');

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const add = document.getElementById('usertextarea').value;
    axios.patch(`/Userinfo/${userjwt.sub}`, { bio: add })
      .then(() => {
        history.push(`/Profile/About/${userId}`);
      }).catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        } else if (error.response.status === 404) {
          setTimeout(() => history.push('*'), 2000); // Redirect to Error page
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
      });
  };
  return (
    <div className="about-bio-area" id="render-bio-abu">
      {!isLoading && (
      <div className="bio-container">
          {/* edit bio button for user */}
          {currUser && (
          <button
            type="button"
            id="user-edit-biobtn"
            className="edit-button"
            onClick={() => { // hide text area and show edit text area
              document.getElementById('textcontainer').style.display = 'none';
              if (text.length > 200) {
                document.getElementById('readbtn').style.display = 'none';
              }
              document.getElementById('editingarea').style.display = 'block';
              document.getElementById('usertextarea').innerHTML = text;
            }}
          >
            <img src={edit} alt="" className="edit-button-img" />
          </button>
          )}
        <div className="edit-bio" id="editingarea" style={{ display: 'none' }}>
          <textarea name="userbio" id="usertextarea" />
          <div className="editbio-actions">
            <button
              type="button"
              className="save-bio"
              id="editbio-savebtn"
              onClick={(e) => { // save changes to text value and hide editing area, show text area
                setText(document.getElementById('usertextarea').value);
                document.getElementById('textcontainer').style.display = 'block';
                if (text.length > 200) {
                  document.getElementById('readbtn').style.display = 'block';
                }
                document.getElementById('editingarea').style.display = 'none';
                handleSubmit(e);
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="cancel-bio"
              id="editbio-cancelbtn"
              onClick={() => { // don't make changes to text, hide editing area, show text are
                document.getElementById('textcontainer').style.display = 'block';
                if (text.length > 200) {
                  document.getElementById('readbtn').style.display = 'block';
                }
                document.getElementById('editingarea').style.display = 'none';
                document.getElementById('usertextarea').value = text;
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="bio-body" id="textcontainer">
          {!isLoading && text.length < 200 ? (
            <p>
              {text}
            </p>
          )
            : (
              <p>
                {text.substring(0, 200)}
                <span id="dots">...</span>
                <span id="more" style={{ display: 'none' }}>
                  {text.substring(201, text.length)}
                </span>
                <button type="button" onClick={Read} id="readbtn">Read more</button>
              </p>
            )}
        </div>
        <div className="divider" />
      </div>
      )}
    </div>
  );
};

export default AboutBio;
