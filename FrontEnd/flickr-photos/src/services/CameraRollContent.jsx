function cameraRollContent() {
  return fetch('http://localhost:8000/photos')
    .then((data) => data.json());
}

export default cameraRollContent;
