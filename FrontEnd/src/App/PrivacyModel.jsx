import React from 'react';
import './PrivacyModel.css';

function PrivacyModel() {
  function closeModel() {
    const modal = document.getElementById('privacyModel');
    modal.style.display = 'none';
  }
  return (

    <>
      <div id="privacyModel" className="privacy-modal">
        {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className="close" onClick={closeModel} onKeyDown={closeModel}>&times;</span>
        <div className="privacy-model-content">
          <h1>Sandy</h1>
        </div>
      </div>
    </>

  );
}

export default PrivacyModel;
