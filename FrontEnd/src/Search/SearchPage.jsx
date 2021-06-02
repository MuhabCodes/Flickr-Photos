import React from 'react';
import MainSearch from './MainSearch';
import NavBar from '../App/Navbar';

const SearchPage = () => (
  <div className="Search-Page">
    <div className="Nav-Bar">
      <NavBar />
    </div>
    <div className="search content">
      <MainSearch />
    </div>
  </div>
);
export default SearchPage;
