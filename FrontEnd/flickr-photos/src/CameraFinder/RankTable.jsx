import React from 'react';
import { cameras } from '../PopularCamerasDb.json';
import './RankTable.css';
// This .jsx will display the data fetched from .json as a table.
// RankTable function has two functions renderHead and renderBody
// 1- renderHead return the headings of the table such as Rank, Brand, Top Models, Model Types,
// and # of Models.
// 2- renderBody maps the objects in the json file as rows in the table,
// each row containing an object and the columns display their details.
// 3- In the return statement, both functions mentioned above are called
// and hence the table is displayed.
// Reference used: https://codesandbox.io/s/cranky-faraday-pogb0?file=/src/components/MoviesTable.js
function RankTable() {
  function renderHead() {
    return (
      <thead id="tableHead">
        <tr className="tableRow">
          <th className="th">Rank ▾</th>
          <th className="th">
            <a className="cameraTable" href="./Brands">Brand</a>
          </th>
          <th className="th">Top Models</th>
          <th className="th">Model Types</th>
          <th className="th"><a className="cameraTable" href="./noOfModels"># of Models</a></th>
        </tr>
      </thead>
    );
  }
  function renderBody() {
    return (
      <tbody id="tbody">
        {cameras.map((camera) => (
          <tr className="tableRow">
            <td className="tableCell" key={camera.rank}>{camera.rank}</td>
            <td className="tableCell" key={camera.rank}><a className="cameraTable" href="./Brands">{camera.brand}</a></td>
            <td className="tableCell" key={camera.rank}>
              {camera.topModels.map((sub, index) => (
                <a className="cameraTable" href="./topModels">
                  { (index ? ', ' : '') + sub }
                </a>
              ))}
            </td>
            <td className="tableCell" key={camera.rank}>
              { camera.modelTypes.map((sub, index) => (
                <span className="modelTypesColumn">
                  { (index ? ', ' : '') + sub }
                </span>
              ))}
            </td>
            <td className="tableCell" key={camera.rank}>{camera.noOfModel}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <div className="rankTable">
      <table className="rankTableDetails">
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}
export default RankTable;
