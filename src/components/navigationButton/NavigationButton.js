import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const NavigationButton = ({label, changePage}) => (
  <FlatButton
    label='the label'
    onClick={changePage}
    primary={true}
    style={{
      width: '100%'
    }}
  />
);

export default NavigationButton
