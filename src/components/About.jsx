import React, { Component } from 'react'
import { Grid, Col, Image} from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/ckheader.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/cknew.jpg" className="about-profile-pic" rounded />
            <h3>Chandon aka Ceekay</h3>
            <p>I'm an aspiring Front End Developer that enjoys ...</p>
          </Col>
        </Grid>
      </div>
    )
  }
}