import React from 'react';
// This .jsx will display the data fetched from .json as a table.

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
}
export default RankTable;
