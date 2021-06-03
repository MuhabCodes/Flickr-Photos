import React from 'react';
import './Share.css';
// This is a share button component, which when pressed, displays the link of the explore webpage
// to be copied to clipboard
function Share() { // shows link to be shared
  document.getElementById('share-link-btn').style.display = 'none';
  document.getElementById('shareArea').style.display = 'block';
}
function CancelShare() { // Cancel button that closes the link window
  document.getElementById('share-link-btn').style.display = 'block';
  document.getElementById('shareArea').style.display = 'none';
}
// Reference used: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function CopyLinkShare() { // Copy the link of explore webpage to clipboard
  const copyText = document.getElementById('expLink');
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand('copy');
  /* Alert the copied text */
  alert(`Copied the text: ${copyText.value}`);
}
const ShareBtn = () => (
  <div className="share-container">
    <button type="button" id="share-link-btn" className="share-button" onClick={Share}>
      <img src="https://img.icons8.com/ios/50/000000/forward-arrow.png" alt="" className="share-button-img" />
      Share
    </button>
    <div className="share-link" id="shareArea" style={{ display: 'none' }}>
      <div className="share-actions">
        <button type="button" className="cancel-share" id="share-cancelbtn" onClick={CancelShare}>X</button>
      </div>
      <textarea name="exploreLink" id="expLink"> https://flick.photos/Explore </textarea>
      <button type="button" onClick={CopyLinkShare}>Copy text</button>
    </div>
  </div>
);
export default ShareBtn;
