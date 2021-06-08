import React, { useEffect, useState } from 'react';
// import { cameras } from '../Mock/MockAPI.json';
import './RankTable.css';
import axios from 'axios';
// This .jsx will display the data fetches data from our api
// RankTable function has two functions renderHead and renderBody
// 1- renderHead return the headings of the table such as Brand, Top Models, Model Types.
// 2- renderBody maps the objects as rows in the table,
// each row containing an object and the columns display their details.
// 3- In the return statement, both functions mentioned above are called
// and hence the table is displayed.
// Reference used: https://codesandbox.io/s/cranky-faraday-pogb0?file=/src/components/MoviesTable.js
/**
 * This component displays all the camera brands flickr knows about.
 * @component
 * @function RankTable
 * @returns {Object} -returns all the camera brands and their details.
 */
const RankTable = () => {
  const [cameras, setPopCam] = useState([]); // sets the cameras fetched from the server
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  axios.defaults.baseURL = 'https://api.flick.photos';
  axios.defaults.headers.Authorization = localStorage.getItem('token');
  // useEffect and axios used to make get request to fetch cameras' details
  useEffect(() => {
    axios.get('/cameras/brands')
      .then((resp) => {
        setLoading(false);
        setPopCam(resp.data.cameras);
        console.log(resp.data);
        return resp.data;
      }).catch((err) => {
        setError(err.response);
        console.log(err);
      });
  }, []);
  /**
   * This function renders the headers of the table.
   * @function renderHead
   * @returns {null} -displays the header of the table.
   */
  function renderHead() {
    return (
      <thead id="table-head">
        <tr className="table-row">
          <th className="table-header-th">
            <a className="camera-table" href="./Brands">Brand</a>
          </th>
          <th className="table-header-th">Top Models</th>
          <th className="table-header-th">Model Types</th>
        </tr>
      </thead>
    );
  }
  /**
   * This function renders the body of table.
   * @function renderBody
   * @returns {Object} - shows all the camera brands as a table.
   */
  function renderBody() {
    return (
      <tbody id="table-body">
        {cameras.map((camera) => (
          <tr className="table-row">
            <td className="table-cell"><a className="camera-table" href="./Brands">{camera.brand}</a></td>
            <td className="table-cell">
              {camera.topModels.map((sub, index) => (
                <a className="camera-table" href="./topModels">
                  { (index ? ', ' : '') + sub }
                </a>
              ))}
            </td>
            <td className="table-cell">
              { camera.modelTypes.map((sub, index) => (
                <span className="model-types-column">
                  { (index ? ', ' : '') + sub }
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <div className="rank-table">
      {error && <div>{error}</div>}
      {isLoading ? <div> Loading </div>
        : (
          <table className="rank-table-details">
            {renderHead()}
            {renderBody()}
          </table>
        )}
    </div>

  );
};
export default RankTable;
