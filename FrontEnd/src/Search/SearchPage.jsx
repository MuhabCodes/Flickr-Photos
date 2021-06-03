import React from 'react';
import MainSearch from './MainSearch';
import NavBar from '../App/Navbar';
// This component is the main component for the search functionality where we gather here
// the main flickr navbar along with the MainSearch component to be displayed on the same page.
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
