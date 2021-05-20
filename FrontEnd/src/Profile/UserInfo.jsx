import React from 'react';
import edit from './assets/edit_icon.png';
import filter from './assets/privacy.png';
import './UserInfo.css';

const UserInfo = () => {
  // const [isDrop, setisDrop] = useState(false);
  function Edit() {
    document.getElementById('actual-info-uip').style.display = 'none';
    document.getElementById('edit-form-container-uip').style.display = 'flex';
  }
  function toggleMenu() {
    document.getElementById('dropdownmenu-ui').style.display = 'flex';
  }
  function Cancel() {
    document.getElementById('actual-info-uip').style.display = 'flex';
    document.getElementById('edit-form-container-uip').style.display = 'none';
  }
  return (
    <div className="user-info-uip">
      <div className="user-info-container-uip">
        <div className="actions-container-userinfoP">
          <button type="button" className="edit-button" onClick={Edit}>
            <img src={edit} alt="" className="edit-button-img" />
          </button>
        </div>
        <div id="edit-form-container-uip" style={{ display: 'none' }}>
          <ul className="userinfo-ul-style">
            <li className="userinfo-list-style">
              <span className="title-uip">Joined</span>
              <span className="user-data-uip">April 2021</span>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputOccupation">
                <span className="title-uip">Occupation</span>
                <input className="input-uip" type="text" id="inputOccupation" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputHometown">
                <span className="title-uip">Hometown</span>
                <input className="input-uip" type="text" id="inputHometown" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputCurrentCity">
                <span className="title-uip">Current city</span>
                <input className="input-uip" type="text" id="inputCurrentCity" />
              </label>
              <span className="filter-img-uip">
                <img src={filter} alt="" className="privacy-uip" />
                <span className="dropdown">
                  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton-uip" aria-label="dropdown-ui" />
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
                <span className="title-uip">Country</span>
                <input className="input-uip" type="text" id="inputCountry" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <span className="title-uip">Email</span>
              <span className="user-data-uip">manaarrzakaria@gmail.com</span>
              <span className="filter-img-uip">
                <img src={filter} alt="" className="privacy-uip" />
                <span className="dropdown">
                  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton-uip" aria-label="dropdown-ui" onClick={toggleMenu} />
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
                <span className="title-uip">Website</span>
                <input className="input-uip" type="text" id="inputWebsite" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputFacebook">
                <span className="title-uip">Facebook</span>
                <input className="input-uip" type="text" id="inputFacebook" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputTwitter">
                <span className="title-uip">Twitter</span>
                <input className="input-uip" type="text" id="inputTwitter" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputInstagram">
                <span className="title-uip">Instagram</span>
                <input className="input-uip" type="text" id="inputInstagram" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputPinteret">
                <span className="title-uip">Pinterest</span>
                <input className="input-uip" type="text" id="inputPinterest" placeholder="your username or profile link" />
              </label>
            </li>
            <li className="userinfo-list-style">
              <label htmlFor="inputTumblr">
                <span className="title-uip">Tumblr</span>
                <input className="input-uip" type="text" id="inputTumblr" placeholder="your username or profile link" />
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
        <div className="info-view-container-uip" id="actual-info-uip">
          <ul className="userinfo-ul-style">
            <li className="userinfo-list-style">
              <span className="title-uip">Joined</span>
              <span className="user-data-uip"> April 2021</span>
            </li>
            <li className="userinfo-list-style">
              <span className="title-uip">Email</span>
              <span className="user-data-uip">manarzakaria@gmail.com</span>
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
