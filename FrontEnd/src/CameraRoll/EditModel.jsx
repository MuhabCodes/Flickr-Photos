import React from 'react';
import './EditModel.css';

function EditModel() {
  function closeModel() {
    const modal = document.getElementById('editmodel');
    modal.style.display = 'none';
  }
  return (
    <div>
      <div id="editmodel" className="edit-modal">
        {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className="close" onClick={closeModel} onKeyDown={closeModel}>&times;</span>

        <div className="edit-model-content">
          <h4>Editting 1 photo</h4>
          <br />
          <input type="text" id="fname" name="firstname" placeholder="Change title" />
          <input type="text" id="fname" name="firstname" placeholder="Change discription" />
        </div>
      </div>
    </div>
  );
}

export default EditModel;
