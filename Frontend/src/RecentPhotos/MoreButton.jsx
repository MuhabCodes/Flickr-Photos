import React from 'react';
/**
 * This component renders the More button in the Explore nav bar.
 * @component
 * @function MoreButton
 * @returns {null} -returns the more button as a dropdown button that displays a menu.
 */
const MoreButton = () => (
  <button className="dropdown-toggle" type="button" data-testid="more-test" id="exp-dropdown-menu-button1" data-toggle="dropdown" aria-expanded="false">
    More
  </button>
);
export default MoreButton;
