/* eslint-disable react/prop-types */
import React from 'react';
import edit from './assets/edit_icon.png';
import './AboutBio.css';
// eslint-disable-next-line react/prop-types
/**
 * This component renders a button that allows the user to show or hide textarea to edit bio
 * @component EditBioButton
 * @function EditBioButton
 * @example <EditBioButton/>
 * @param {string} text - description text of user
 * @returns Edit bio button
 */
const EditBioButton = ({ text }) => (
  <button
    data-testid="edit-bio"
    aria-label="editingbutton"
    type="button"
    id="user-edit-biobtn"
    className="edit-button"
    onClick={() => { // hide text area and show edit text area
      document.getElementById('textcontainer').style.display = 'none';
      // eslint-disable-next-line react/prop-types
      if (text.length > 200) {
        document.getElementById('readbtn').style.display = 'none';
      }
      document.getElementById('editingarea').style.display = 'block';
      document.getElementById('usertextarea').innerHTML = text;
    }}
  >
    <img src={edit} alt="" className="edit-button-img" />
  </button>
);
export default EditBioButton;
