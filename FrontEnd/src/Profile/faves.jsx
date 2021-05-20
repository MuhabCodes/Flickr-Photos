import React from 'react';
import images from './imagesArray';
import './faves.css';

const Faves = () => (
  <div className="faves-view-up">
    <div className="faves-container-up">
      {images.map((image) => (
        <img className="grid-item-favesup" src={image.src} alt="" />
        /* <div className="interaction-view">
            <div className="photo-list-interaction">
              <div className="interaction-bar">
                <div className="text-faves">
                  <a href={image.src} className="image-title-faves" tabIndex="-1">{image.title}</a>
                  <a href="/photos" className="faves-attribution">
                    by
                    {' '}
                    {image.user}
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div> */
      ))}
    </div>
  </div>
);

export default Faves;
