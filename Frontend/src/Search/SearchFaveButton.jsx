import React from 'react';
/**
 * This component renders the Fave button in the search page that is displayed on each fetched
 * image.
 * @param {function} props -takes in the ClickMe function
 * @returns {null} -displays the fave button.
 */
const FaveButtonSearch = (props) => {
  const cl = props;
  const { ClickMe } = cl;
  return (
    <button className="fav-btn-exp" type="button" data-testid="fave-test-search" id="fave-button-exp" onClick={ClickMe}>
      <img
        className="star"
        src="https://img.icons8.com/android/24/ffffff/star.png"
        alt="favIcon"
      />
    </button>
  );
};
export default FaveButtonSearch;
