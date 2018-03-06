import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IncrementButton from '../../styleGuide/buttons/countButton/IncrementCountButton'
import DecrementButton from '../../styleGuide/buttons/countButton/DecrementCountButton'
import IncrementAsyncButton from '../../styleGuide/buttons/countButton/IncrementCountAsyncButton'
import DecrementAsyncButton from '../../styleGuide/buttons/countButton/DecrementCountAsyncButton'
import NavigationButton from '../../styleGuide/buttons/navigationButton/VisibleNavigationButton'

const url = '/home';

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

export default {
  component: Home,
  url
}