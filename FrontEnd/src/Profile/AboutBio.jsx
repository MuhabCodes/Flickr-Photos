import React, { useState, useEffect } from 'react';
import useFetch from './usefetch';
import edit from './assets/edit_icon.png';
import './AboutBio.css';

const AboutBio = () => {
  const { data: About } = useFetch('http://localhost:8000/Bios/85826296@N00');
  const [text, setText] = useState('');

  useEffect(async () => {
    const resp = await fetch('http://localhost:8000/Bios/85826296@N00');
    const data = await resp.json();
    setText(data.bio);
  }, []);
  function Read() {
    //  Read function that checks whether user wants to read more or read less
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
  return (
    <div className="about-bio-area">
      {About && (
      <div className="bio-container">
        {/* edit bio button for user */}
        <button
          type="button"
          id="user-edit-biobtn"
          className="edit-button"
          onClick={() => { // hide text area and show edit text area
            document.getElementById('textcontainer').style.display = 'none';
            if (text.length > 200) {
              document.getElementById('readbtn').style.display = 'none';
            }
            document.getElementById('editingarea').style.display = 'block';
            document.getElementById('usertextarea').innerHTML = text;
          }}
        >
          <img src={edit} alt="" className="edit-button-img" />
        </button>
        <div className="edit-bio" id="editingarea" style={{ display: 'none' }}>
          <textarea name="userbio" id="usertextarea" />
          <div className="editbio-actions">
            <button
              type="button"
              className="save-bio"
              id="editbio-savebtn"
              onClick={() => { // save changes to text value and hide editing area, show text area
                setText(document.getElementById('usertextarea').value);
                document.getElementById('textcontainer').style.display = 'block';
                if (text.length > 200) {
                  document.getElementById('readbtn').style.display = 'block';
                }
                document.getElementById('editingarea').style.display = 'none';
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="cancel-bio"
              id="editbio-cancelbtn"
              onClick={() => { // don't make changes to text, hide editing area, show text are
                document.getElementById('textcontainer').style.display = 'block';
                if (text.length > 200) {
                  document.getElementById('readbtn').style.display = 'block';
                }
                document.getElementById('editingarea').style.display = 'none';
                document.getElementById('usertextarea').value = text;
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="bio-body" id="textcontainer">
          {About && text.length < 200 ? (
            <p>
              {text}
            </p>
          )
            : (
              <p>
                {text.substring(0, 200)}
                <span id="dots">...</span>
                <span id="more" style={{ display: 'none' }}>
                  {text.substring(201, text.length)}
                </span>
                <button type="button" onClick={Read} id="readbtn">Read more</button>
              </p>
            )}

        </div>
        <div className="divider" />
      </div>
      ) }
    </div>
  );
};

export default AboutBio;
