import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TextField, RaisedButton } from 'material-ui'
import PropTypes from 'prop-types'

class SetupFinances extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleOnClick = (event) => {
    this.props.history.push('/finances/blow/overview');
  }

  render() {
    return (
    <div>
      <Grid fluid style={{paddingTop: '1rem'}}>
        <h1>Setup Household Finances</h1>
        <Row style={{marginBottom: '1rem'}}>
          J: $<TextField value='180,000'/>
        </Row>
        <Row style={{marginBottom: '1rem'}}>
          H: $<TextField value='100,000'/>
        </Row>
        <RaisedButton text='Overview' onClick={this.handleOnClick} primary={true} />
			</Grid>
    </div>
    );
  }
}

export default {
  url: '/setup',
  component:SetupFinances
}