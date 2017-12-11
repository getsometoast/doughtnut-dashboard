import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <div 
      style={{
        width: '100%',
        'margin-bottom': '10px'
      }}>

      <div
        style={{
          display: 'flex'
        }}>
        <div
          style={{
              'margin-right': '10px',
              'margin-bottom': '10px'
            }}>

          <RaisedButton 
            label='Increment'
            onClick={props.increment}
            disabled={props.isIncrementing}
            primary={true}
            style={{
              width: '220px',
            }}
          />

        </div>
        <div
          style={{
              'margin-left': '10px'
              }}>

          <RaisedButton 
            label='Increment Async'
            onClick={props.incrementAsync} 
            disabled={props.isIncrementing}
            primary={true}
            style={{
              width: '220px',
            }}
          />
        </div>
      </div>
      
      <div
        style={{
          display: 'flex'
        }}>
        <div
          style={{
              'margin-right': '10px'
            }}>

          <RaisedButton 
            label='Decrement'
            onClick={props.decrement}
            disabled={props.isDecrementing}
            secondary={true}
            style={{
              width: '220px',
            }}
          />

        </div>
        <div
          style={{
              'margin-left': '10px'
              }}>

          <RaisedButton 
            label='Decrement Async'
            onClick={props.decrementAsync} 
            disabled={props.isDecrementing} 
            secondary={true}
            style={{
              width: '220px',
            }}
          />
        </div>
      </div>
    </div>

    <div 
      style={{
        width: '100%'
      }}>
        <FlatButton
          label='Go to about page via redux'
          onClick={() => props.changePage()}
          primary={true}
          style={{
            width: '100%'
          }}
        />
      </div>
  </div>
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
