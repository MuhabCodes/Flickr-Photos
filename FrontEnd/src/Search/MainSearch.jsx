import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormControl } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './MainSearch.css';
import jwt from 'jwt-decode';
// This page is to allow the user to search for pictures by title
// The page is initially empty with only a search bar on the right
// the user will be able to type the title of the desired image in the search box and retreive
// the results on clicking on the search button
// Afterwards, images that match the query entered will be displayed in the page
// The search can be used by both users and guests, however guests are not allowed to
// see any details on the image or use the fav functionality,
// this option is limited only to the users logged in by their accounts.

const MainSearch = () => {
  const [search, setSearch] = useState([]);// To set the title entered by the user
  const history = useHistory(); // useHistory is used to manipulate the url
  // when searching with title=query
  const [stateImages, setStateImages] = useState([]); // used to set the images fetched
  const [isLoading, setLoading] = useState(true); // for loading purpose
  // The following function loadPage is used to check if token exists,
  // and displays the image's details on hovering for the logged in user and none for the guest.
  let userjwt = [];
  function loadPage() {
    if (localStorage.getItem('token')) {
      userjwt = jwt(localStorage.getItem('token'));
      $('.text-area-search').css('display', 'block');
    }
  }
  // fetchImages is the function that handles the fetching process
  function fetchImages() {
    // useEffect helps us fetch the photos from the mock server.
    useEffect(() => {
      axios.get(`/photos?title=${search}`)
        .then((resp) => {
          setLoading(false);
          setStateImages(resp.data);
        });
    }, [search]);
    return stateImages;
  }
  // function searchClick: on clicking on the search button, the images will be fetched and the url
  // will be changed to match the results' title
  const searchClick = (e) => {
    e.preventDefault();
    history.push(`/search?title=${search}`);
    document.getElementById('img-div').style.display = 'block';
    return search;
  };
  // handleSearchInputChanges sets the title entered by user in the search box
  // and sets it using setSearch
  const handleSearchInputChanges = (e) => {
    e.preventDefault();
    document.getElementById('img-div').style.display = 'none';
    setSearch(e.target.value);
  };
  // This function toggles the fav button on each image in the results by setting the src url
  function ClickMe(e) {
    if (userjwt) {
      if (e.target.getAttribute('src') === 'https://img.icons8.com/android/24/ffffff/star.png') {
        e.target.setAttribute('src', 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png');
      } else if (e.target.getAttribute('src') === 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png') {
        e.target.setAttribute('src', 'https://img.icons8.com/android/24/ffffff/star.png');
      }
    }
  }
  const searchData = fetchImages();
  return (
    <div className="search-page">
      <div id="search-bar">
        <Form inline className="search" onSubmit={searchClick}>
          <FormControl
            type="text"
            placeholder="Photos"
            className="form-control me-2 min-vw-50"
            aria-label="Search"
            value={search}
            onInput={handleSearchInputChanges}
            name="title"
          />
          <button type="submit" id="search-button-btn">
            <img src="https://img.icons8.com/ios/25/000000/search--v1.png" alt="" />
            {' '}
          </button>
        </Form>
      </div>
      <div className="image-results">
        {isLoading ? <div>Loading...</div> : (
          <div id="img-div" style={{ display: 'none' }}>
            <div className="image-grid-search">
              {searchData.map((photo) => (
                <div className="image-container-search">
                  <LazyLoadImage
                    className="single-image-search"
                    src={photo.imagePath}
                    alt=""
                    key={photo.photoId}
                    onLoad={loadPage}
                  />
                  <span id="hover-items-search" className="text-area-search" style={{ display: 'none' }}>
                    <span className="title-search">
                      {photo.title}
                    </span>
                    <span className="user-name-search">
                      by
                      {' '}
                      {photo.user}
                    </span>
                    <span className="faves-search">
                      <button className="fav-btn-search" type="button" id="fave-button" key={photo.photoId} onClick={ClickMe}>
                        <img
                          className="star"
                          src="https://img.icons8.com/android/24/ffffff/star.png"
                          alt=""
                        />
                      </button>
                      <span onChange={ClickMe} value={photo.favs} className="fav-count-search" id="fav-num" key={photo.photoId}>
                        {photo.favs}
                      </span>
                    </span>
                    <span className="comments-search">
                      <img className="comment-icon-search" src="https://img.icons8.com/ios/50/ffffff/topic.png" alt="commentIcon" width="25px" height="25px" />
                      {photo.comments}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MainSearch;
