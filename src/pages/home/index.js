import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IncrementButton from '../../components/countButtons/IncrementCountButton'
import IncrementAsyncButton from '../../components/countButtons/IncrementCountAsyncButton'
import DecrementButton from '../../components/countButtons/DecrementCountButton'
import DecrementAsyncButton from '../../components/countButtons/DecrementCountAsyncButton'
import NavigationButton from '../../components/navigationButton/NavigationButton'

class Home extends Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: '1rem'}}>
        <Row style={{marginBottom: '1rem'}}>
          <Col xs={6} md={6}>
            <IncrementButton />
          </Col>
          <Col xs={6} md={6}>
            <IncrementAsyncButton />
          </Col>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          <Col xs={6} md={6}>
            <DecrementButton />
          </Col>
          <Col xs={6} md={6}>
            <DecrementAsyncButton />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>  
            <NavigationButton />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home
