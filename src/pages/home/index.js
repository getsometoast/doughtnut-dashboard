import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

class Home extends Component {
  render() {
    return (
      <Grid fluid style={{paddingTop: '1rem'}}>
        <Row style={{marginBottom: '1rem'}}>
          <Col xs={6} md={6}>
            <RaisedButton 
              label='Increment'
              onClick={this.props.increment}
              disabled={this.props.isIncrementing}
              primary={true}
              style={{
                width: '100%',
              }}
            />
          </Col>
          <Col xs={6} md={6}>
            <RaisedButton 
              label='Increment Async'
              onClick={this.props.incrementAsync} 
              disabled={this.props.isIncrementing}
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
              onClick={this.props.decrement}
              disabled={this.props.isDecrementing}
              secondary={true}
              style={{
                width: '100%',
              }}
            />
          </Col>
          <Col xs={6} md={6}>
            <RaisedButton 
              label='Decrement Async'
              onClick={this.props.decrementAsync} 
              disabled={this.props.isDecrementing} 
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
              onClick={() => this.props.changePage()}
              primary={true}
              style={{
                width: '100%'
              }}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

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
