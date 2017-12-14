import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IncrementButton from '../../components/buttons/countButton/IncrementCountButton'
import DecrementButton from '../../components/buttons/countButton/DecrementCountButton'
import IncrementAsyncButton from '../../components/buttons/countButton/IncrementCountAsyncButton'
import DecrementAsyncButton from '../../components/buttons/countButton/DecrementCountAsyncButton'
import NavigationButton from '../../components/buttons/navigationButton/VisibleNavigationButton'

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
