import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarFooter.css';

import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
      <Container className="justify-content-md-center">
        <Row>
          <Col xs={6} lg={2}>
            <a href="/About">About</a>
          </Col>
          <Col xs={6} lg={2}>
            <a href="/Jobs">Jobs</a>
          </Col>
          <Col xs={6} lg={2}>
            <a href="/Blog">Blog</a>
          </Col>
          <Col xs={6} lg={2}>
            <a href="Developers">Developers</a>
          </Col>
          <Col xs={6} lg={2}>
            <a href="/GuideLines">Guidelines</a>
          </Col>
          <Col xs={6} lg={2}>
            <a href="/Help">Help</a>
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
          <Col xs={6} lg={1}>
            <a href="/Privacy">Privacy</a>
          </Col>
          <Col xs={6} lg={1}>
            <a href="/Terms">Terms</a>
          </Col>
          <Col xs={6} lg={2}>
            <a href="/Cookies">Cookies</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
