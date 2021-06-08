import React from 'react';
import MainSearch from './MainSearch';
import NavBar from '../App/Navbar';
// This component is the main component for the search functionality where we gather here
// the main flickr navbar along with the MainSearch component to be displayed on the same page.
/**
 * This is the main component of the search page where flickr's nav bar component and main search
 * component are rendered.
 * @component
 * @function SearchPage
 * @returns {null} -shows the components of the search page.
 */
const SearchPage = () => (
  <div className="search-page">
    <div className="nav-bar">
      <NavBar />
    </div>
    <div className="search-content">
      <MainSearch />
    </div>
  </div>
);
export default SearchPage;
