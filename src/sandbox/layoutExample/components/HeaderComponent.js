import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { AppBar } from 'material-ui'
import PropTypes from 'prop-types'

class HeaderComponent extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    //const testDataItems = this.props.testDataItems;

    // do an appbar from material ui
    return (
      <div>
        <AppBar
          title='Layout Example'
          style={{padding: '1rem'}}
        />
      </div>
    )
  }
}

export default withRouter(HeaderComponent)
