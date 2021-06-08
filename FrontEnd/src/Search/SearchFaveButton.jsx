import React from 'react';

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
