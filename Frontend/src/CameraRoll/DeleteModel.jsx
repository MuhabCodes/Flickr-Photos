import React from 'react';
import './DeleteModel.css';
import Button from 'react-bootstrap/Button';

function DeleteModel() {
  function closeModel() {
    const modal = document.getElementById('deleteModal');
    modal.style.display = 'none';
  }
  return (
    <div id="deleteModal" className="delete-modal">
      {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <span className="close" onClick={closeModel} onKeyDown={closeModel}>&times;</span>
      <div className="delete-model-content">
        <h5>Are you sure want to delete this photo?</h5>
        <br />
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
}

export default DeleteModel;
