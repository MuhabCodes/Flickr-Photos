import React from 'react';
import edit from './assets/edit_icon.png';

const text = 'seeing if this works, leave for later to re';

const AboutBio = () => {
  function Read() {
    //  Read function that checks whether user wants to expand or collapse the text area
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const btnText = document.getElementById('readbtn');

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
    }
  }
  function Edit() { // shows text area when edit button is clicked
    const bio = document.getElementById('textcontainer');
    const readbtn = document.getElementById('readbtn');
    bio.style.display = 'none';
    readbtn.style.display = 'hide';
    document.getElementById('editingarea').style.display = 'block';
  }
  return (
    <div className="bio-container">
      {/* edit bio button for user */}
      <button type="button" className="edit-button" onClick={Edit}>
        <img src={edit} alt="" className="edit-button-img" />
      </button>
      <div className="edit-bio" id="editingarea" style={{ display: 'none' }}>
        <textarea name="userbio" id="usertextarea">
          {text}
        </textarea>
        <div className="editbio-actions">
          <button type="button" className="save-bio">Save</button>
          <button type="button" className="cancel-bio">Cancel</button>
        </div>
      </div>
      <div className="bio-body" id="textcontainer">
        <p>lets see how this acts and looks</p>
        <p>snother line just to see</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
          nulla et dictum
          interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor.
          Maecenas nisl est,
          ultrices nec congue eget, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
          <span id="dots">...</span>
          <span id="more" style={{ display: 'none' }}>
            venenatis imperdiet sed ornare turpis.
            Donec vitae dui eget tellus gravida venenatis.
            Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
          </span>
        </p>
        <button type="button" onClick={Read} id="readbtn">Read more</button>
      </div>
      <div className="divider" />
    </div>
  );
};

export default AboutBio;
