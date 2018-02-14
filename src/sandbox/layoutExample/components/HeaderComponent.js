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
    return (
      <div>
        <AppBar
          title='Layout Example'
          style={{padding: '1rem'}}
          onLeftIconButtonClick={() => (this.props.onMenuClicked())}
        />
      </div>
    )
  }
}

export default withRouter(HeaderComponent)
