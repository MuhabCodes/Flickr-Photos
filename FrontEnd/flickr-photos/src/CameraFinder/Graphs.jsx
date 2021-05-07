import React from 'react';
// This file includes the graphs of popular point & shoot cameras and popular cameraphones
const Graphs = () => (
  <div className="graphs">
    <div className="contentBox">
      <h3 className="titleOfGraph1">Popular Point & Shoot Cameras</h3>
      <img id="graph1" src="https://live.staticflickr.com/cameras/0_graph_main_c6cffefa7b.png" alt="Popular Point & Shoot Cameras" />
      <ul id="legendsOfGraph1">
        <li>
          <span className="firstBullet">■</span>
          <a href="./Brand">
            Sony DSC-RX100
          </a>
        </li>
        <li>
          <span className="secondBullet">■</span>
          <a href="./Brand">
            Sony DSC-RX100M3
          </a>
        </li>
        <li>
          <span className="thirdBullet">■</span>
          <a href="./Brand">
            Canon PowerShot SX50 HS
          </a>
        </li>
        <li>
          <span className="fourthBullet">■</span>
          <a href="./Brand">
            Panasonic DMC-FZ200
          </a>
        </li>
        <li>
          <span className="fifthBullet">■</span>
          <a href="./Brand">
            Nikon Coolpix P900
          </a>
        </li>
      </ul>
    </div>
    <div className="contentBox2">
      <h3 className="titleOfGraph2">Popular Cameraphones</h3>
      <img id="graph2" src="https://live.staticflickr.com/cameras/2_graph_main_f50d48349d.png" alt="Popular Cameraphones" />
      <ul id="legendsOfGraph2">
        <li>
          <span className="firstBullet">■</span>
          <a href="./Brand">
            Apple iPhone 6
          </a>
        </li>
        <li>
          <span className="secondBullet">■</span>
          <a href="./Brand">
            Apple iPhone 6s
          </a>
        </li>
        <li>
          <span className="thirdBullet">■</span>
          <a href="./Brand">
            Apple iPhone 5s
          </a>
        </li>
        <li>
          <span className="fourthBullet">■</span>
          <a href="./Brand">
            Apple iPhone 7
          </a>
        </li>
        <li>
          <span className="fifthBullet">■</span>
          <a href="./Brand">
            Apple iPhone 7 Plus
          </a>
        </li>
      </ul>
    </div>
    <h2 id="aboutTheseGraphs"><a href="./graphs">About these graphs »</a></h2>
  </div>
);
export default Graphs;
