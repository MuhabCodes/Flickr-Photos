import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
      <Container className="justify-content-md-center">
        <Row>
          <Col xs lg="2">
            <a href="#about">About</a>
          </Col>
          <Col xs lg="2">
            <a href="#about">Jobs</a>
          </Col>
          <Col xs lg="2">
            <a href="#about">Blog</a>
          </Col>
          <Col xs lg="2">
            <a href="#about">Developers</a>
          </Col>
          <Col xs lg="2">
            <a href="#about">Guidelines</a>
          </Col>
          <Col xs lg="2">
            <a href="#about">Help</a>
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-md-center">
        <Row>
          <Col xs lg="11">
            <hr />
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-md-center">
        <Row>
          <Col xs lg="1">
            <a href="#about">Privacy</a>
          </Col>
          <Col xs lg="1">
            <a href="#about">Terms</a>
          </Col>
          <Col xs lg="1">
            <a href="#about">Cookies</a>
          </Col>
          <Col xs lg="5">
            <p>SmugMug+Flickr. Connecting people through photography.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
