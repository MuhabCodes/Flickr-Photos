import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ExploreNavBar from './ExploreNavBar';
import RecentPhotos from './RecentPhotos';
import configData from '../config.json';
// import Pagination from './Pagination';
import ShareBtn from './Share';

// The Explore.jsx will include the title of the webpage, nav bars as well as
// the components of Recent Photos
// Can be used by any user /guest
const Explore = () => {
  const [photos, setRecPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [imagesPerPage] = useState(10);
  // useEffect helps us fetch the photos from the mock server.
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`${configData.SERVER_URL}/photosExplore`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRecPhotos(data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //     });
  // }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      fetch(`${configData.SERVER_URL}/photosExplore`)
        .then((res) => res.json())
        .then((data) => {
          setRecPhotos(data);
          setLoading(false);
        })
        .catch(() => {
        });
    };
    fetchPosts();
  }, []);
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     setLoading(true);
  //     const res = await axios.get(`${configData.SERVER_URL}/photosExplore`);
  //     setRecPhotos(res.data);
  //     setLoading(false);
  //   };

  //   fetchImages();
  // }, []);

  // Get current posts
  // const indexOfLastPost = currentPage * imagesPerPage;
  // const indexOfFirstPost = indexOfLastPost - imagesPerPage;
  // const currentImages = photos.slice(indexOfFirstPost, indexOfLastPost);
  // // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="recent-photos">
      <ExploreNavBar />
      <div className="explore-page-content" id="explore">
        <br className="break-lines" />
        <br className="break-lines" />
        <h1 id="exploreTitle">
          Explore
        </h1>
        <ShareBtn />
        <RecentPhotos photos={photos} loading={loading} />
        {/* <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={photos.length}
          paginate={paginate}
        /> */}
      </div>
    </div>
  );
};
export default Explore;
