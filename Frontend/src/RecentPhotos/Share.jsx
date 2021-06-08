import React from 'react';
import './Share.css';
// This is a share button component, which when pressed, displays the link of the explore webpage
// to be copied to clipboard
/**
 * This function shows the link to be copied and shared.
 * @function Share
 * @return {null} -it just shows the area where the link appears and hides the share button.
 */
function Share() { // shows link to be shared
  document.getElementById('share-link-btn').style.display = 'none';
  document.getElementById('share-area').style.display = 'block';
}
/**
 * This function closes the link window, displays the share button but hides the link window.
 * @function CancelShare
 * @returns {null} - displays the share button but hides the link window.
 */
function CancelShare() { // Cancel button that closes the link window
  document.getElementById('share-link-btn').style.display = 'block';
  document.getElementById('share-area').style.display = 'none';
}
// Reference used: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
/**
 * Copy the link of explore webpage to clipboard.
 * @function CopyLinkShare
 * @returns {null} -just copies the link to clipboard.
 */
function CopyLinkShare() { // Copy the link of explore webpage to clipboard
  const copyText = document.getElementById('exp-link');
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand('copy');
  /* Alert the copied text */
  alert(`Copied the text: ${copyText.value}`);
}
/**
 * This is the share button components which contains the share button, link window and
 * cancel button elements.
 * @component
 * @function ShareBtn
 * @returns {null} -just shows and hides the link to the current webpage.
 */
const ShareBtn = () => (
  <div className="share-container">
    <button type="button" id="share-link-btn" data-testid="share-test" className="share-button" onClick={Share}>
      <img src="https://img.icons8.com/ios/50/000000/forward-arrow.png" alt="" className="share-button-img" />
      Share
    </button>
    <div className="share-link" id="share-area" style={{ display: 'none' }}>
      <div className="share-actions">
        <button type="button" className="cancel-share" id="share-cancelbtn" onClick={CancelShare}>X</button>
      </div>
      <textarea name="exploreLink" id="exp-link" value="https://flick.photos/Explore" readOnly="https://flick.photos/Explore"> </textarea>
      <button type="button" id="copy-link-button" onClick={CopyLinkShare}>Copy text</button>
    </div>
  </div>
);
export default ShareBtn;
