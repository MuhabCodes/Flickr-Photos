import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormControl } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './MainSearch.css';
// This page is to allow the user to search for pictures by title
// The page is initially empty with only asearch bar on the right
// the user will be able to type the title of the desired image in the search box and retreive
// the results on clicking on the search button
// Afterwards, images that match the query entered will be displayed in the page
// The search can be used by both users and guests, however guests are not allowed to
// fav any pictures, this option is limited only to the users logged in by their accounts.

const MainSearch = () => {
  const [search, setSearch] = useState([]);// To set the title entered by the user
  const history = useHistory(); // useHistory is used to manipulate the url
  // when searching with title=query
  const [stateImages, setStateImages] = useState([]); // used to set the images fetched
  const [isLoading, setLoading] = useState(true); // for loading purpose
  // fetchImages is the function that handles the fetching process
  function fetchImages() {
    // useEffect helps us fetch the photos from the mock server.
    useEffect(() => {
      axios.get(`/photos?title=${search}`)
        .then((resp) => {
          setStateImages(resp.data);
          setLoading(false);
        });
    }, [search]);
    return stateImages;
  }
  // function searchClick: on clicking on the search button, the images will be fetched and the url
  // will be changed to match the results' title
  const searchClick = (e) => {
    e.preventDefault();
    history.push(`/search?title=${search}`);
    document.getElementById('imgDiv').style.display = 'block';
    return search;
  };
  // handleSearchInputChanges sets the title entered by user in the search box
  // and sets it using setSearch
  const handleSearchInputChanges = (e) => {
    e.preventDefault();
    document.getElementById('imgDiv').style.display = 'none';
    setSearch(e.target.value);
  };
  // This function toggles the fav button on each image in the results by setting the src url
  function ClickMe(e) {
    if (e.target.getAttribute('src') === 'https://img.icons8.com/android/24/ffffff/star.png') {
      e.target.setAttribute('src', 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png');
    } else if (e.target.getAttribute('src') === 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png') {
      e.target.setAttribute('src', 'https://img.icons8.com/android/24/ffffff/star.png');
    }
  }
  const searchData = fetchImages();
  console.log(searchData);
  return (
    <div className="search-page">
      <div id="searchBar">
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
          <button type="submit">
            <img src="https://img.icons8.com/ios/25/000000/search--v1.png" alt="" />
            {' '}
          </button>
        </Form>
      </div>
      <div className="image-results">
        {isLoading ? <div>Loading...</div> : (
          <div id="imgDiv" style={{ display: 'none' }}>
            <div className="image-grid">
              {searchData.map((photo) => (
                <div className="image-container">
                  <LazyLoadImage
                    className="single-image"
                    src={photo.imagePath}
                    alt=""
                    key={photo.photoId}
                  />
                  <span className="text-area">
                    <span className="title-exp">
                      {photo.title}
                    </span>
                    <span className="user-name-explore">
                      by
                      {' '}
                      {photo.user}
                    </span>
                    <span className="faves">
                      <button className="fav-btn" type="button" id="faveButton" key={photo.photoId} onClick={ClickMe}>
                        <img
                          className="star"
                          src="https://img.icons8.com/android/24/ffffff/star.png"
                          alt="favIcon"
                        />
                      </button>
                      <span className="fav-count" id="favNum" key={photo.photoId}>
                        {photo.favs}
                      </span>
                    </span>
                    <span className="comments">
                      <img className="comment-icon" src="https://img.icons8.com/ios/50/ffffff/topic.png" alt="commentIcon" width="25px" height="25px" />
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
