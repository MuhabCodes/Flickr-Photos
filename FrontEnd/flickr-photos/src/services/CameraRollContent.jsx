function cameraRollContent() {
  return fetch('http://localhost:5000/photos')
    .then((data) => data.json());
}

export default cameraRollContent;
