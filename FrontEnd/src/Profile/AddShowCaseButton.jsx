import React from 'react';
import add from './assets/add-icon.png';
import './Showcase.css';
/**
 * This component renders the add to showcase button
 * @component AddShowCaseButton
 * @function AddShowCaseButton
 * @example <AddShowCaseButton/>
 * @returns button
 */
const AddShowCaseButton = () => (
  <button type="button" className="add-btn-scp" data-testid="addsc-btn">
    <img src={add} className="add-icon-scp" alt="" />
  </button>
);

export default AddShowCaseButton;
