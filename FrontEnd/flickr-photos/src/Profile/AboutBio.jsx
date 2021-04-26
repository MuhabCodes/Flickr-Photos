import React from 'react';
import edit from './assets/edit_icon.png';

const AboutBio = () => (

  <div className="bio-container">
    <button type="button" className="edit-button">
      <img src={edit} alt="" className="edit-button-img" />
    </button>
    <div className="bio-body">
      <p>lets see how this acts and looks</p>
      <p>snother line just to see</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
        nulla et dictum
        interdum, nisi lorem egestas vitae scel
        <span id="dots">...</span>
        <span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
      </p>
    </div>

    <div className="divider" />
  </div>
);

export default AboutBio;
