import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const url = '/overview';

class Overview extends Component {
  render() {
    return (
    <div>
      <Grid fluid style={{paddingTop: '1rem'}}>
        <h1>Finances: Overview</h1>
        <Row style={{marginBottom: '1rem'}}>
          <Col mdOffset={4} md={2}>
            <h3>Daily Expenses:</h3>
          </Col>
          <Col md={6}>
            <h3>$5000</h3>
          </Col>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col mdOffset={4} md={2}>
            <h3>Freedom:</h3>
          </Col>
          <Col md={6}>
            <h3>$1000</h3>
          </Col>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col mdOffset={4} md={2}>
            <h3>Smile:</h3>
          </Col>
          <Col md={6}>
            <h3>$10000</h3>
          </Col>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col mdOffset={4} md={2}>
            <h3>Fire Extinguisher:</h3>
          </Col>
          <Col md={6}>
            <h3>$100000</h3>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default {
  component: Overview,
  url,
}