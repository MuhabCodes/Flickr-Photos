import React, { useState } from 'react';
import './PopoutImageModel.css';
import PrivacyModel from './PrivacyModel';

function PopoutImageModel(prop) {
  const { image } = prop;
  const [privacyModel, setPrivacyModel] = useState(false);

  function ShowPrivacyModel() {
    setPrivacyModel(!privacyModel);
    console.log(privacyModel);
  }
  return (
    <>
      <div className="image-modal">
        <div className="image-model-content">
          <div>
            <img src={image} alt="" className="image-model-size" />
          </div>
          <div className="model-button">
            <button type="button" className="model-button-style" onClick={ShowPrivacyModel}>
              <i className="fas fa-lock" />
              {' '}
              Privacy
            </button>
            <button type="button" className="model-button-style"><i className="far fa-edit"> Edit</i></button>
            <button type="button" className="model-button-style">
              <i className="far fa-share-square" />
              {' '}
              Share
            </button>
            <button type="button" className="model-button-style">
              <i className="fas fa-plus" />
              {' '}
              Add to album
            </button>
            <button type="button" className="model-button-style">
              <i className="fas fa-download" />
              {' '}
              Download
            </button>
            <button type="button" className="delete-button">
              <i className="far fa-trash-alt" />
              {' '}
              Delete
            </button>
          </div>
        </div>
      </div>
      {privacyModel ? <PrivacyModel /> : null }
    </>
  );
}

export default PopoutImageModel;
