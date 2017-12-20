import React from 'react'
import { push } from 'react-router-redux'
import FlatButton from 'material-ui/FlatButton'

export default (props) => 
  <FlatButton
    {...props}
    label='go to about page via redux'
    primary={true}
    style={{width: '100%'}}
    onClick={() => push('/about-us')}
  />
