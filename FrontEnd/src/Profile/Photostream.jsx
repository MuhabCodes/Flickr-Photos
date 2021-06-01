import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import Images from './imagesArray';
import 'react-dropdown/style.css';
import './Photostream.css';

const Photostream = () => {
  // let prevWidth = 0;
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
          <div className="secondary-tools-container-uph">
            <div className="share-button-uph" />
            <div className="edit-button-uph">
              <Link to="/profile/photostream/edit" className="edit-link-uph">
                <span className="edit-icon-uph" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="photolist-contains-uph">
        {/* stopped here */}
        {Images.map((image) => (
          <div className="grid-item-uph" style={{ backgroundImage: `url(${image.src}` }} alt="" />
        ))}
      </div>
    </div>
  );
};
export default Photostream;
