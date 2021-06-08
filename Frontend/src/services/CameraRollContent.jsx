import axios from 'axios';

function cameraRollContent() {
  return axios('http://localhost:8000/cameraroll')
    .then((resp) => resp.data);
}

export default cameraRollContent;
