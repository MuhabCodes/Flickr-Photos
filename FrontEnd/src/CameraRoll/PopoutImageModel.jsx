import React, { useState } from 'react';
import DeleteModel from './DeleteModel';
import EditModel from './EditModel';
import './PopoutImageModel.css';
import PrivacyModel from './PrivacyModel';

// this function is to render popout model when clicking on an image
function PopoutImageModel(prop) {
  const { image } = prop;
  // set privacymodel initial state to false
  const [privacyModel, setPrivacyModel] = useState(false);
  // set edit model intial state to false
  const [editModel, setEditModel] = useState(false);

  // set delete model intial state to false
  const [deleteModel, setdelete] = useState(false);

  // show privacy model when clicking on it by changing its state to true
  function ShowPrivacyModel() {
    setPrivacyModel(!privacyModel);
    console.log(privacyModel);
  }

  // show edit model when clicking on it by changing its state to true
  function ShowEditModel() {
    setEditModel(!editModel);
    console.log(editModel);
  }

  // show delete model when clicking on it by changing its state to true
  function ShowDeleteModel() {
    setdelete(!deleteModel);
    console.log(deleteModel);
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
      {privacyModel ? <PrivacyModel /> : null }
      {editModel ? <EditModel /> : null }
      {deleteModel ? <DeleteModel /> : null }
    </>
  );
}

export default PopoutImageModel;
