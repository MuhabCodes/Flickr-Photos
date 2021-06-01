import axios from 'axios';

function cameraRollContent() {
  return axios('http://localhost:8000/photos')
    .then((resp) => resp.data);
}

export default cameraRollContent;
