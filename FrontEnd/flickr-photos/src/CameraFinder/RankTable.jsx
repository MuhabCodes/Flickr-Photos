import React from 'react';
import { cameras } from '../PopularCamerasDb.json';
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
      <thead>
        <tr>
          <th>Rank ▾</th>
          <th>
            <a href="./Brands">Brand</a>
          </th>
          <th>Top Models</th>
          <th>Model Types</th>
          <th><a href="./noOfModels"># of Models</a></th>
        </tr>
      </thead>
    );
  }
  function renderBody() {
    return (
      <tbody>
        {cameras.map((camera) => (
          <tr>
            <td key={camera.rank}>{camera.rank}</td>
            <td key={camera.rank}><a href="./Brands">{camera.brand}</a></td>
            <td key={camera.rank}>
              {camera.topModels.map((sub, index) => (
                <a href="./topModels">
                  { (index ? ', ' : '') + sub }
                </a>
              ))}
            </td>
            <td key={camera.rank}>
              { camera.modelTypes.map((sub, index) => (
                <span>
                  { (index ? ', ' : '') + sub }
                </span>
              ))}
            </td>
            <td key={camera.rank}>{camera.noOfModel}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  return (
    <div className="rankTable">
      <table>
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}
export default RankTable;
