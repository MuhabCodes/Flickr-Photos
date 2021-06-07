import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import './AddModalShowcase.css';
import images from './imagesArray';

const AddModalShowcase = () => {
  let translateW = 20;
  let translateH = 10;
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  function calcTranslate() {
    if (translateW === 1025) {
      translateW = 20;
      translateH += 202;
    } else {
      translateW += 201;
    }
  }
  return (
    <div className="modal-view-scp">
      <div className="head-scp">
        <div className="nav-modal-scp">
          <div className="fluid-nav-modal-scp">
            <div className="fluid-modal-nav-bar-scp">
              <div className="fluid-nav-modal-content-scp">
                <ul className="links-nav-modal-scp">
                  <li className="menu-item-scp">
                    <a className="link-item-scp" href="/">Photostream</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-lines-scp">
        <div className="content-subview-mscp">
          <div className="photo-view-selector-mscp">
            <div className="photoselector-title-bar-mscp">
              <div className="title-mscp">No public photos</div>
            </div>
            <div className="photo-selector-wrapper-mscp">
              <div className="photo-selecor-mscp">
                <div className="photo-selector-container-mscp">
                  <div className="view-photo-list-view-mscp">
                    {images.map((image) => (
                      <div className="photo-view-mscp" style={{ backgroundImage: `url(${image.src})`, minHeight: '182px', transform: `translate(${translateW}px, ${translateH}px)` }}>
                        {calcTranslate()}
                        <Checkbox className="checkbox-image-mscp" onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" value={image.title} />
                        <div className="interaction-view-mscp">
                          <div className="photolist-interaction-mscp">
                            <div className="square-mscp" />
                            <div className="interaction-bar-mscp">
                              <div className="interaction-text-mscp">
                                <Link className="photo-title-mscp" to="/photo">av</Link>
                                <Link className="photo-owner-mscp" to="/user">by bkah blah</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mscp">
        <div className="buttons-mscp">
          <div className="footer-text-container-mscp">
            <div className="footer-text-mscp">
              Choose a photo
            </div>
            <div className="button-container-mscp">
              <button className="showcase-add-mscp" type="button">Select photo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddModalShowcase;
