import React, { useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import Dropdown from './Dropdown';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Photostream.css';

const Photostream = () => {
  const [choice, setChoice] = useState('Date uploaded');
  const items = [
    'Date uploaded', 'Date taken',
  ];
  function onSelect(e) {
    setChoice(e.value);
  }
  return (
    <div className="photostream-container-uph">
      <div className="magic-tools-uph">
        <div className="magic-toolbar-uph">
          <div className="primary-tools-container-uph">
            <div className="filter-tools-uph" id="dropdown-container-uph">
              <Dropdown options={items} onChange={onSelect} value={choice} id="dropdown-btn-uph" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Photostream;
