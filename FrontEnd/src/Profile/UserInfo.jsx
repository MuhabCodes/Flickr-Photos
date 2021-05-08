import React from 'react';
import edit from './assets/edit_icon.png';
import filter from './assets/privacy.png';
import './UserInfo.css';

const UserInfo = () => {
  // const [isDrop, setisDrop] = useState(false);
  function Edit() {
    document.getElementById('actual-info-uiP').style.display = 'none';
    document.getElementById('edit-form-container-uiP').style.display = 'flex';
  }
  function toggleMenu() {
    document.getElementById('dropdownmenu-ui').style.display = 'flex';
  }
  function Cancel() {
    document.getElementById('actual-info-uiP').style.display = 'flex';
    document.getElementById('edit-form-container-uiP').style.display = 'none';
  }
  return (
    <div className="user-info-uiP">
      <div className="user-info-container-uiP">
        <div className="actions-container-userinfoP">
          <button type="button" className="edit-button" onClick={Edit}>
            <img src={edit} alt="" className="edit-button-img" />
          </button>
        </div>
        <div id="edit-form-container-uiP" style={{ display: 'none' }}>
          <ul className="userinfo-ul-style">
            <li className="userinfo-list-style">
              <span className="title-uiP">Joined</span>
              <span className="user-data-uiP">April 2021</span>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputOccupation">
                <span className="title-uiP">Occupation</span>
                <input className="input-uiP" type="text" id="inputOccupation" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputHometown">
                <span className="title-uiP">Hometown</span>
                <input className="input-uiP" type="text" id="inputHometown" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputCurrentCity">
                <span className="title-uiP">Current city</span>
                <input className="input-uiP" type="text" id="inputCurrentCity" />
              </label>
              <span className="filter-img-uiP">
                <img src={filter} alt="" className="privacy-uiP" />
                <span className="dropdown">
                  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton-uiP" aria-label="dropdown-ui" />
                  <div className="dropdown-menu" id="dropdownmenu-ui" aria-labelledby="dropdowbMenuButton">
                    <a href="/" className="dropdown-menu">Everone</a>
                    <a href="/" className="dropdown-menu">Any Flickr Member</a>
                    <a href="/" className="dropdown-menu">People I follow</a>
                    <a href="/" className="dropdown-menu">Friends and family</a>
                  </div>
                </span>
              </span>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputCountry">
                <span className="title-uiP">Country</span>
                <input className="input-uiP" type="text" id="inputCountry" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <span className="title-uiP">Email</span>
              <span className="user-data-uiP">manaarrzakaria@gmail.com</span>
              <span className="filter-img-uiP">
                <img src={filter} alt="" className="privacy-uiP" />
                <span className="dropdown">
                  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton-uiP" aria-label="dropdown-ui" onClick={toggleMenu} />
                  <div className="dropdown-menu" id="dropdownmenu-ui" aria-labelledby="dropdowbMenuButton">
                    <a href="/" className="dropdown-menu">Everone</a>
                    <a href="/" className="dropdown-menu">Any Flickr Member</a>
                    <a href="/" className="dropdown-menu">People I follow</a>
                    <a href="/" className="dropdown-menu">Friends and family</a>
                  </div>
                </span>
              </span>
            </li>
          </ul>
          <ul className="userinfo-ul-style">
            <li className="userinfo-list-style">
              <label htmlFor="inputWebsite">
                <span className="title-uiP">Website</span>
                <input className="input-uiP" type="text" id="inputWebsite" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputFacebook">
                <span className="title-uiP">Facebook</span>
                <input className="input-uiP" type="text" id="inputFacebook" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputTwitter">
                <span className="title-uiP">Twitter</span>
                <input className="input-uiP" type="text" id="inputTwitter" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputInstagram">
                <span className="title-uiP">Instagram</span>
                <input className="input-uiP" type="text" id="inputInstagram" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputPinteret">
                <span className="title-uiP">Pinterest</span>
                <input className="input-uiP" type="text" id="inputPinterest" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputTumblr">
                <span className="title-uiP">Tumblr</span>
                <input className="input-uiP" type="text" id="inputTumblr" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="done-ui">
              <span className="actions-userinfoP">
                <button type="button" className="save-ui">Save</button>
                <button type="button" className="cancel-ui" onClick={Cancel}>Cancel</button>
              </span>
            </li>
          </ul>
        </div>
        <div className="info-view-container-uiP" id="actual-info-uiP">
          <ul className="userinfo-ul-style">
            <li className="userinfo-list-style">
              <span className="title-uiP">Joined</span>
              <span className="user-data-uiP"> April 2021</span>
            </li>
            <li className="userinfo-list-style">
              <span className="title-uiP">Email</span>
              <span className="user-data-uiP">manarzakaria@gmail.com</span>
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
