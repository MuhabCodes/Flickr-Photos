import React from 'react';
import useFetch from './usefetch';
import edit from './assets/edit_icon.png';

const AboutBio = () => {
  const { data: About } = useFetch('http://localhost:8000/Bios/85826296@N00');
  // const [text, setText] = useState(null);

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
  function Edit() { // shows text area when edit button is clicked
    document.getElementById('textcontainer').style.display = 'none';
    if (About.bio.length > 200) {
      document.getElementById('readbtn').style.display = 'none';
    }
    document.getElementById('editingarea').style.display = 'block';
    document.getElementById('usertextarea').innerHTML = About.bio;
  }
  function Cancel() { // Cancel button that doesn't change anything in current bio value
    document.getElementById('textcontainer').style.display = 'block';
    if (About.bio.length > 200) {
      document.getElementById('readbtn').style.display = 'block';
    }
    document.getElementById('editingarea').style.display = 'none';
    document.getElementById('usertextarea').innerHTML = About.bio;
  }
  function Save() { // Save button that changes current value of bio to be saved
    About.bio = document.getElementById('usertextarea').value;
    document.getElementById('textcontainer').style.display = 'block';
    if (About.bio.length > 200) {
      document.getElementById('readbtn').style.display = 'block';
    }
    document.getElementById('editingarea').style.display = 'none';
  }
  return (
    <div className="about-bio-area">
      {About && (
      <div className="bio-container">
        {/* edit bio button for user */}
        <button type="button" id="user-edit-biobtn" className="edit-button" onClick={Edit}>
          <img src={edit} alt="" className="edit-button-img" />
        </button>
        <div className="edit-bio" id="editingarea" style={{ display: 'none' }}>
          <textarea name="userbio" id="usertextarea" />
          <div className="editbio-actions">
            <button type="button" className="save-bio" id="editbio-savebtn" onClick={Save}>Save</button>
            <button type="button" className="cancel-bio" id="editbio-cancelbtn" onClick={Cancel}>Cancel</button>
          </div>
        </div>
        <div className="bio-body" id="textcontainer">
          {About && About.bio.length < 200 ? (
            <p>
              {About.bio}
            </p>
          )
            : (
              <p>
                {About.bio.substring(0, 200)}
                <span id="dots">...</span>
                <span id="more" style={{ display: 'none' }}>
                  {About.bio.substring(201, About.bio.length)}
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
