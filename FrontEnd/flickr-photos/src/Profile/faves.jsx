import React from 'react';
import images from './imagesArray';

const Faves = () => (
  <div className="faves-view">
    <div className="faves-container">
      {images.map((image) => (
        <img className="grid-item-faves" src={image.src} alt="" />
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
