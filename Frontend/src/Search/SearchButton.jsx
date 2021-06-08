import React from 'react';
/**
 * This component renders the search button.
 * @component
 * @function SearchButton
 * @returns {null} -displays the search button.
 */
const SearchButton = () => (
  <div className="search-but">
    <button type="submit" id="search-button-btn" data-testid="search-button-test">
      <img src="https://img.icons8.com/ios/25/000000/search--v1.png" alt="" />
      {' '}
    </button>
  </div>
);
export default SearchButton;
