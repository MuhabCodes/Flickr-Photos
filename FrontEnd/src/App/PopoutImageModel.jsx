// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import React from 'react';
// import { render } from 'react-dom';
import './PopoutImageModel.css';

function Example(prop) {
  const { style } = prop;
  return (
    <>
      <div id="myModal" className="image-modal" style={style}>
        <div className="image-model-content">
          <img src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="image-model-size" />

        </div>
      </div>
      ;

    </>
  );
}

export default Example;
