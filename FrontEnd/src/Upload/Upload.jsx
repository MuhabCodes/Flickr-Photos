import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Upload.css';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import toDataUrl from './ToDataUrl';

function Upload() {
  const history = useHistory(); // useHitory to redirect the user
  const userjwt = jwt(localStorage.getItem('token'));
  const [selectedFiles, setSelectedFiles] = useState([]); // images state (intially empty)
  const [restData, setRestData] = useState([]); // rest File data
  const [photoTag, setPhotoTag] = useState(''); // set photo tags on input change
  const [photoAlbum, setPhotoAlbum] = useState(''); // set photo album on input change
  const [photoPrivacy, setPhotoPrivacy] = useState('public'); // set privacy on change (default public)
  const imgElement = React.useRef(null); // to get image dimensions

  // handle input change
  const handleImageChange = (e) => {
    if (e.target.files) {
      const restDataArray = [];
      Array.from(e.target.files).forEach((file) => {
        const data = {};
        data.fileName = file.name; // get the file name
        data.fileDate = new Date(); // get the photo upload date
        restDataArray.push(data);
      });
      setRestData((prevData) => prevData.concat(restDataArray)); // merge arrays

      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setSelectedFiles((prevImages) => prevImages.concat(filesArray)); // merge arrays
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file)); // avoid memory leak
    }
  };
  // cancel upload of selected files
  const deleteItem = (i) => {
    setSelectedFiles((currentItems) => currentItems.filter((item, index) => index !== i));
    setRestData((currentItems) => currentItems.filter((item, index) => index !== i));
  };
  // Render photos for preview
  const renderPhotos = (source) => source.map((photo, index) => (
    <div key={photo}>
      <img
        id="added-photos"
        src={photo}
        alt=""
        ref={imgElement}
        onLoad={() => {
          restData[index].photoWidth = imgElement.current.naturalWidth; // get image width & height
          restData[index].photoHeight = imgElement.current.naturalHeight;
        }}
      />
      {' '}
      {/* cancel button */}
      <IconButton id="cancel-button" color="secondary" onClick={() => deleteItem(index)}>
        <CancelIcon fontSize="small" />
      </IconButton>
    </div>
  ));

  // button state and empty state whether it's disabled or enabled
  const [enabled, setEnabled] = useState(false);

  // using useEffect we can detect if user uploaded any file,
  // so enable upload button and hide empty state
  useEffect(() => {
    if (selectedFiles.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [selectedFiles]);

  // Handling upload event
  const handleUpload = (e) => {
    e.preventDefault();
    const uploadButton = document.getElementById('enabled-button');
    uploadButton.id = 'disabled-button'; // set the upload to disabled
    if (selectedFiles.length > 0) {
      const dataArray = [];
      selectedFiles.forEach((selectedFile, index) => {
        const data = {}; // create data object
        data.title = restData[index].fileName; // set photo name
        data.date = restData[index].fileDate; // set photo upload date
        data.width = restData[index].photoWidth;
        data.height = restData[index].photoHeight;
        data.userId = userjwt.sub;
        data.tag = photoTag;
        data.album = photoAlbum;
        data.privacy = photoPrivacy;
        toDataUrl(selectedFile)
          .then((dataUrl) => {
            data.src = dataUrl; // set image src
            dataArray.push(data);
            axios.post('/photos', data)
              .then(() => {
                history.push(`/profile/photostream/${userjwt.sub}`); // redirect to photostream after upload
              });
          });
      });
    }
  };

  return (
    <div>
      <div id="upload-nav">
        <div id="buttons">
          <div id="upload-photo">
            {/* Upload button (intially disabled ) */}
            {enabled ? <button id="enabled-button" type="submit" form="a-form" onClick={handleUpload}> Upload </button> : <input id="disabled-button" type="button" value="Upload" /> }
          </div>
          <form id="a-form" action="../Explore" method="post">
            {/* Add photos button */}
            <div id="add-photo">
              <button type="button" id="add-photo-button" title="Select files to upload">
                <span id="icon-plus">+</span>
                {' '}
                Add
              </button>
              <label htmlFor="add-files" id="custom-file-upload">
                <input type="file" id="add-files" multiple accept="image/*,video/*,.m4v,.mkv,.m2ts,.ogg,.3gp,.mp4" onChange={handleImageChange} />
                Add
              </label>
            </div>
          </form>
        </div>
      </div>
      <div id="working-area-container">
        {/* No photos added state */}
        <div
          id="empty-state"
          style={{
            visibility: enabled ? 'hidden' : 'visible',
          }}
        >
          <p id="upload-limit">
            You can upload 1000 more photos and videos.
          </p>
          <button type="button" className="btn btn-primary" onClick={() => { document.getElementById('add-files').click(); }}>Choose photos and videos to upload</button>
          <br />
          <br />
          <Link to="/Account/Upgrade/Pro" id="upgrade-pro-upload">
            {/* Redirects to get pro */}
            Get pro for unlimited downloads
          </Link>
        </div>
        {/* photos added state */}
        <div id="result">
          {renderPhotos(selectedFiles)}
        </div>
        {/* photos edit panel */}
        <div
          id="edit-panel"
          style={{
            visibility: enabled ? 'visible' : 'hidden',
          }}
        >
          <h3 id="edit-panel-title">Editing photos:</h3>
          <div id="edit-panel-list">
            <ul id="edit-options">
              <li id="edit-option">
                <h4 id="edit-option-title">Add tags</h4>
                <input type="text" name="tag" id="edit-input-tags" placeholder="Separate tags with a space" onChange={(event) => setPhotoTag(event.target.value)} />
              </li>
              <li id="edit-option">
                <h4 id="edit-option-title">Add to album</h4>
                <input type="text" name="album" id="edit-input-albums" placeholder="Type your album" onChange={(event) => setPhotoAlbum(event.target.value)} />
              </li>
              <li id="edit-option">
                <h4 id="edit-option-title">Privacy</h4>
                <label htmlFor="private">
                  <input type="radio" id="private" name="privacy" value="private" onClick={() => setPhotoPrivacy('private')} />
                  {' '}
                  Private
                </label>
                <br />
                <label htmlFor="public">
                  <input type="radio" id="public" name="privacy" value="public" defaultChecked onClick={() => setPhotoPrivacy('public')} />
                  {' '}
                  Public
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
