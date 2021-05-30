// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import React from 'react';
// import { render } from 'react-dom';
import './PopoutImageModel.css';

function Example(prop) {
  const { image } = prop;
  return (
    <>
      <div id="myModal" className="image-modal">
        <div className="image-model-content">
          <img src={image} alt="" className="image-model-size" />

        </div>
      </div>
      ;

    </>
  );
}

export default Example;
