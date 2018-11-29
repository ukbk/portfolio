import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2> Welcome to my Portfolio</h2>
          <Link to="/about">
            <Button bsStyle="primary">About me</Button>
        </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src=""  circle className="profile-pic" />
            <h3>Designer</h3>
            <p></p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src=""  circle className="profile-pic" />
            <h3>Front-end Developer</h3>
            <p></p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src=""  circle className="profile-pic" />
            <h3>Blogger</h3>
            <p></p>
          </Col>
        </Row>
      </Grid>
    )
  }
}