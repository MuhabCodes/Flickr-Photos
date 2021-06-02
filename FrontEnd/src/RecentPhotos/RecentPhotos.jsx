import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import configData from '../config.json';
// The RecentPhotos.jsx is the component which helps in displaying the recent photos,
// It includes the function 'RecentPhotos' which has a code the helps in fetching the photos from
// a mock server. This function returns the fetched images, but not all at once,
// but a couple at a time and the more the user scrolls down,
// the more images are fetched and displayed.
const RecentPhotos = (props) => {
  // const [photos, setRecPhotos] = useState([]);
  // const [toggled, setToggle] = useState(false);
  const ph = props;
  const { photos, loading } = ph;
  // useEffect helps us fetch the photos from the mock server.
  // useEffect(() => {
  //   fetch(`${configData.SERVER_URL}/photosExplore`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRecPhotos(data);
  //     })
  //     .catch(() => {
  //     });
  // }, []);

  // const obj = JSON.parse(photos);
  // console.log(obj.favs);
  // The following changes the photos(objects) to array that can be used by the .map
  // function in the return block.
  const photoArr = Array.from(photos);
  // console.log(photoArr[1].favs);
  // function IncFave() {
  //   if (toggled === true) {
  //     const count = document.getElementById('favNum').innerText;
  //     console.log(count);
  //   }
  // }
  // The following function toggles the fave icon on click
  function ClickMe(e) {
    if (e.target.getAttribute('src') === 'https://img.icons8.com/android/24/ffffff/star.png') {
      e.target.setAttribute('src', 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png');
      // console.log(photoArr[].favs);
      // setToggle(!toggled);
      // IncFave();
      // let count = e.target.
      // count += 1;
      // console.log(count);
    } else if (e.target.getAttribute('src') === 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png') {
      e.target.setAttribute('src', 'https://img.icons8.com/android/24/ffffff/star.png');
      // setToggle(toggled);
    }
  }

  // The following if condition checks if no images are in photos (fetched), display loading.
  if (loading) {
    return <h1>Loading</h1>;
  }
  // The following part is the one returns the fetched images.
  // The lazy load Image component is used to display the images but not all at once,
  // when the user scrolls down more images are fetched to be displayed.
  // The next lines are to display the image description, username, faves and comments count
  // when hovering on an image
  return (
    <div className="recent-photos">
      <div className="image-grid">
        {photoArr.map((photo) => (
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
        <div />
      </div>
    </div>
  );
};
export default RecentPhotos;
