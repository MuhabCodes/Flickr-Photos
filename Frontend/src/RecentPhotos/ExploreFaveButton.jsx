import React from 'react';
/**
 * This component renders the fave button that appears on every image in the recent photos.
 * @component
 * @function FaveButton
 * @param {function} props --this function takes in ClickMe function that changes the button's
 * appearance on click.
 * @returns {null} -displays the fave button on each image fetched.
 */
const FaveButton = (props) => {
  const cl = props;
  const { ClickMe } = cl;
  return (
    <button className="fav-btn-exp" type="button" data-testid="fave-test" id="fave-button-exp" onClick={ClickMe}>
      <img
        className="star"
        src="https://img.icons8.com/android/24/ffffff/star.png"
        alt="favIcon"
      />
    </button>
  );
};
export default FaveButton;
