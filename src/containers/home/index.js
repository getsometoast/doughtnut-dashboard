import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const rightButtons = props => (
  <div>
    <FlatButton label='About' />
    <FlatButton label='Home' />
    Count: {props.count}
  </div>
);

const Home = props => (
  <Grid fluid>
  <Row style={{marginBottom: '1rem'}}>
    <AppBar
      title='Home'
      onLeftIconButtonClick={props.increment}
      iconElementRight={rightButtons(props)}
      style={{padding: '1rem'}}
    />
    
    <Drawer docked={false} open={false}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  </Row>
  <Row style={{marginBottom: '1rem'}}>
    <Col xs={6} md={6}>
      <RaisedButton 
        label='Increment'
        onClick={props.increment}
        disabled={props.isIncrementing}
        primary={true}
        style={{
          width: '100%',
        }}
      />
    </Col>
    <Col xs={6} md={6}>
      <RaisedButton 
        label='Increment Async'
        onClick={props.incrementAsync} 
        disabled={props.isIncrementing}
        primary={true}
        style={{
          width: '100%',
        }}
      />
    </Col>
  </Row>
  <Row style={{marginBottom: '1rem'}}>
    <Col xs={6} md={6}>
      <RaisedButton 
        label='Decrement'
        onClick={props.decrement}
        disabled={props.isDecrementing}
        secondary={true}
        style={{
          width: '100%',
        }}
      />
    </Col>
    <Col xs={6} md={6}>
      <RaisedButton 
        label='Decrement Async'
        onClick={props.decrementAsync} 
        disabled={props.isDecrementing} 
        secondary={true}
        style={{
          width: '100%',
        }}
      />
    </Col>
  </Row>
  <Row>
    <Col xs={12} md={12}>  
      <FlatButton
        label='Go to about page via redux'
        onClick={() => props.changePage()}
        primary={true}
        style={{
          width: '100%'
        }}
      />
    </Col>
  </Row>
</Grid>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
