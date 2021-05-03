import React from 'react';
import edit from './assets/edit_icon.png';
import filter from './assets/privacy.png';

const UserInfo = () => {
  function Edit() {
    document.getElementById('actual-info').style.display = 'none';
    document.getElementById('edit-form-container').style.display = 'flex';
  }
  return (
    <div className="user-info">
      <div className="user-info-container">
        <div className="actions-container">
          <button type="button" className="edit-button" onClick={Edit}>
            <img src={edit} alt="" className="edit-button-img" />
          </button>
        </div>
        <div id="edit-form-container" style={{ display: 'none' }}>
          <ul>
            <li>
              <span className="title">Joined</span>
              <span className="user-data">April 2021</span>
            </li>
            <li>
              <label htmlFor="inputOccupation">
                <span className="title">Occupation</span>
                <input type="text" id="inputOccupation" />
              </label>
            </li>
            <li>
              <label htmlFor="inputHometown">
                <span className="title">Hometown</span>
                <input type="text" id="inputHometown" />
              </label>
            </li>
            <li>
              <label htmlFor="inputCurrentCity">
                <span className="title">Current city</span>
                <input type="text" id="inputCurrentCity" />
                <span className="filter-img">
                  <img src={filter} alt="" className="privacy" />
                </span>
              </label>
            </li>
            <li>
              <label htmlFor="inputCountry">
                <span className="title">Country</span>
                <input type="text" id="inputCountry" />
              </label>
            </li>
            <li>
              <span className="title">Email</span>
              <span className="user-data">manaarrzakaria@gmail.com</span>
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="inputWebsite">
                <span className="title">Website</span>
                <input type="text" id="inputWebsite" />
              </label>
            </li>
            <li>
              <label htmlFor="inputFacebook">
                <span className="title">Facebook</span>
                <input type="text" id="inputFacebook" placeholder="your username or profile link" />
              </label>
            </li>
            <li>
              <label htmlFor="inputTwitter">
                <span className="title">Twitter</span>
                <input type="text" id="inputTwitter" placeholder="your username or profile link" />
              </label>
            </li>
            <li>
              <label htmlFor="inputInstagram">
                <span className="title">Instagram</span>
                <input type="text" id="inputInstagram" placeholder="your username or profile link" />
              </label>
            </li>
            <li>
              <label htmlFor="inputPinteret">
                <span className="title">Pinterest</span>
                <input type="text" id="inputPinterest" placeholder="your username or profile link" />
              </label>
            </li>
            <li>
              <label htmlFor="inputTumblr">
                <span className="title">Tumblr</span>
                <input type="text" id="inputTumblr" placeholder="your username or profile link" />
              </label>
            </li>
          </ul>
        </div>
        <div className="info-view-container" id="actual-info">
          <ul>
            <li>
              <span className="title">Joined</span>
              <span className="user-data"> April 2021</span>
            </li>
            <li>
              <span className="title">Email</span>
              <span className="user-data">manarzakaria@gmail.com</span>
            </li>
          </ul>
          <ul className="spacer" />
        </div>
        <div className="divider" />
      </div>
    </div>
  );
};

export default UserInfo;
