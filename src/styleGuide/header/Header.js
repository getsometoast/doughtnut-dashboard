import React, { Component } from 'react';
import { AppBar, FlatButton } from 'material-ui'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleNavigate = (location) => {
    console.log(location);
    return (event) => {
      this.props.history.push(location);
    }
  }

  rightButtons = (count) => (
    <div>
      <FlatButton label='TestData' onClick={this.handleNavigate('/sandbox/crudExample')} />
      <FlatButton label='About' onClick={this.handleNavigate('/about-us')} />
      <FlatButton label='Home' onClick={this.handleNavigate('/')} />
      Count: {count}
    </div>
  );

  render() {
    const { count, onMenuClicked } = this.props;

    return (
      <AppBar
        title='The AppBar!'
        onLeftIconButtonClick={() => (this.props.onMenuClicked())}
        iconElementRight={this.rightButtons(count)}
        style={{padding: '1rem'}}
      />
    )
  }
}

export default withRouter(Header)
