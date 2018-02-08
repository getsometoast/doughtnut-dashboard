import React, { Component } from 'react';
import { TextField, FlatButton } from 'material-ui'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class ListTestDataComponent extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT...");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleOnClick = (event) => {
    this.props.history.push('/sandbox/crudExample/new')
  }

  render() {
    return (
      <div className='container'>
        <FlatButton label='New' onClick={this.handleOnClick} />
      </div>
    )
  }
}

export default  withRouter(ListTestDataComponent)
