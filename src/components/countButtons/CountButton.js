import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const CountButton = ({label, primary, secondary, changeCount, isChangingCount}) => (
  <RaisedButton 
    label={label}
    onClick={changeCount}
    disabled={isChangingCount}
    primary={primary}
    secondary={secondary}
    style={{
      width: '100%',
    }}
  />
);

export default CountButton
