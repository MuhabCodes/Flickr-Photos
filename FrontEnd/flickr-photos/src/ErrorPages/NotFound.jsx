import { Link } from 'react-router-dom';
import React from 'react';
import './NotFound.css';

const NotFound = () => (
  <div className="mainErrorPage">
    <div className="main404Container">
      <div className="upper404Container">
        <h2 className="H2404">
          404
        </h2>
        <h3 className="H3404">
          This is not the page you&#39;re looking for.
        </h3>
        <p className="Paragraph404">
          It appears the photostream you seek doesn’t exist.
          <br />
          Here are some of today’s best photos instead:
        </p>
      </div>
      <div className="lower404Container">
        <div className="imagesContainer404">
          <img className="image404Style" src="https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620238748497-0b4bd9b922e2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620221909406-02ca086acd4d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620236104164-d2e71d7f4b1f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620058689342-80271a734f23?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620203178232-3619475228a9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620232224149-25be08bdec08?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620223741726-7d39ff6e4e6c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620238748497-0b4bd9b922e2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620221909406-02ca086acd4d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620236104164-d2e71d7f4b1f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620058689342-80271a734f23?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620203178232-3619475228a9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620232224149-25be08bdec08?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620223741726-7d39ff6e4e6c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620238748497-0b4bd9b922e2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620221909406-02ca086acd4d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
          <img className="image404Style" src="https://images.unsplash.com/photo-1620236104164-d2e71d7f4b1f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
      <div className="exploreButton">
        <Link to="Explore">
          <button className="viewMoreButton" type="button">View more photos</button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
