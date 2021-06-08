import React, { useState } from 'react';
import DeleteModel from './DeleteModel';
import EditModel from './EditModel';
import './PopoutImageModel.css';
import PrivacyModel from './PrivacyModel';

// this function is to render popout model when clicking on an image
/**
 * @module
 * @function PopoutImageModel
 * @example </PopoutImageModel>
 * @param {object} prop - have the image id to be edited and the image url
 * @returns {null} - returns the model with buttons that renders other models
 */
function PopoutImageModel(prop) {
  const { image } = prop;
  const { imageid } = prop;

  // set privacymodel initial state to false
  const [privacyModel, setPrivacyModel] = useState(false);
  // set edit model intial state to false
  const [editModel, setEditModel] = useState(false);

  // set delete model intial state to false
  const [deleteModel, setdelete] = useState(false);

  // show privacy model when clicking on it by changing its state to true
  /**
   * show privacy model that allows to change the privacy
   * @function ShowPrivacyModel
   * @example </ShowPrivacyModel>
   * @returns {null} - change state of the model
   */
  function ShowPrivacyModel() {
    setPrivacyModel(!privacyModel);
  }

  // show edit model when clicking on it by changing its state to true
  /**
   * show edit model that allows to change the privacy
   * @function ShowEditModel
   * @example </ShowEditModel>
   * @returns {null} - change state of the model
   */
  function ShowEditModel() {
    setEditModel(!editModel);
  }

  // show delete model when clicking on it by changing its state to true
  /**
   * show delete model that allows to change the privacy
   * @function ShowDeleteModel
   * @example </ShowDeleteModel>
   * @returns {null} - change state of the model
   */
  function ShowDeleteModel() {
    setdelete(!deleteModel);
  }
  return (
    <>
      <div className="image-modal">
        <div className="image-model-content">
          <div>
            <img src={image} alt="" className="image-model-size" />
          </div>
          {/* privacy button */}
          <div className="model-button">
            <button type="button" className="model-button-style" onClick={ShowPrivacyModel}>
              <i className="fas fa-lock" />
              {' '}
              Privacy
            </button>

            {/* Edit button  */}
            <button type="button" className="model-button-style" onClick={ShowEditModel}><i className="far fa-edit"> Edit</i></button>

            {/* Share button */}
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
            <button type="button" className="delete-button" onClick={ShowDeleteModel}>
              <i className="far fa-trash-alt" />
              {' '}
              Delete
            </button>
          </div>
        </div>
      </div>
      {privacyModel ? <PrivacyModel imageid={imageid} /> : null }
      {editModel ? <EditModel imageid={imageid} /> : null }
      {deleteModel ? <DeleteModel /> : null }
    </>
  );
}

export default PopoutImageModel;
