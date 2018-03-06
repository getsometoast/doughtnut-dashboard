import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TextField } from 'material-ui'

class Overview extends Component {
  render() {
    return (
    <div>
      <Grid fluid style={{paddingTop: '1rem'}}>
        <h1>BLOW</h1>
        <Row style={{marginBottom: '1rem'}}>
          J: $<TextField value='180,000'/>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          H: $<TextField value='100,000'/>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col md={3}>
            <h3>Daily:</h3>
          </Col>
          <Col md={3}>
            %<TextField value='40'/>
          </Col>
          <Col md={3}>
            <h3>$5000</h3>
          </Col>
          <Col md={3}>
            <h3>Budget: $3000</h3>
          </Col>          
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col md={3}>
            <h3>Freedom:</h3>
          </Col>
          <Col md={3}>
            %<TextField value='10'/>
          </Col>
          <Col md={3}>
            <h3>$1000</h3>
          </Col>
          <Col md={3}>
            <h3>Current: $990</h3>
          </Col>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col md={3}>
            <h3>Smile:</h3>
          </Col>
          <Col md={3}>
            %<TextField value='10'/>
          </Col>
          <Col md={3}>
            <h3>$1000</h3>
          </Col>
          <Col md={3}>
            <h3>Budgets: $10000</h3>
          </Col>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col md={3}>
            <h3>Fire:</h3>
          </Col>
          <Col md={3}>
            %<TextField value='40'/>
          </Col>
          <Col md={3}>
            <h3>$5000</h3>
          </Col>
          <Col md={3}>
            <h3>Goals: $200000</h3>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default {
  url: '/overview',
  component: Overview
}