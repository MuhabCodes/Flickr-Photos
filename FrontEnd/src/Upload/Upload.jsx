import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Upload.css';

function Upload() {
  return (
    <div id="upload-nav">
      <div id="buttons">
        <div id="upload-photo">
          <input id="disabled-button" type="button" value="Upload" />
        </div>
        <form action="." method="post">
          <div id="add-photo">
            <button type="button" id="add-photo-button" title="Select files to upload">
              <span id="icon-plus">+</span>
              {' '}
              Add
            </button>
            <label htmlFor="add-files" className="custom-file-upload">
              <input type="file" id="add-files" multiple accept="image/*,video/*,.m4v,.mkv,.m2ts,.ogg,.3gp,.mp4" />
              Add
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;
