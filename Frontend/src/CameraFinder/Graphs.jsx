import React from 'react';
import './Graphs.css';
// This file includes the graphs of popular point & shoot cameras and popular cameraphones
/**
 *This component displays two static graphs to show statistics for popular point & shoot cameras
 as well as most popular cameraphones. Their legends are displayed for each graph.
 *@component
 *@function Graphs
 *@returns {null} -return the graphs as images, their legends and the title of each graph.
 */
const Graphs = () => (
  <div className="graphs">
    <div className="content-box">
      <h3 className="title-of-graph1">Popular Point & Shoot Cameras</h3>
      <img id="graph1" src="https://live.staticflickr.com/cameras/0_graph_main_c6cffefa7b.png" alt="Popular Point & Shoot Cameras" />
      <ul id="legends-of-graph1">
        <li className="bullet-list-graphs">
          <span className="first-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Sony DSC-RX100
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="second-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Sony DSC-RX100M3
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="third-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Canon PowerShot SX50 HS
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="fourth-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Panasonic DMC-FZ200
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="fifth-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Nikon Coolpix P900
          </a>
        </li>
      </ul>
    </div>
    <div className="content-box2">
      <h3 className="title-of-graph2">Popular Cameraphones</h3>
      <img id="graph2" src="https://live.staticflickr.com/cameras/2_graph_main_f50d48349d.png" alt="Popular Cameraphones" />
      <ul id="legends-of-graph2">
        <li className="bullet-list-graphs">
          <span className="first-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Apple iPhone 6
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="second-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Apple iPhone 6s
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="third-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Apple iPhone 5s
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="fourth-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Apple iPhone 7
          </a>
        </li>
        <li className="bullet-list-graphs">
          <span className="fifth-bullet">■</span>
          <a className="brands-hyper-tags" href="./Brand">
            Apple iPhone 7 Plus
          </a>
        </li>
      </ul>
    </div>
    <h2 id="about-these-graphs"><a className="brands-hyper-tags" href="./graphs">About these graphs »</a></h2>
  </div>
);
export default Graphs;
