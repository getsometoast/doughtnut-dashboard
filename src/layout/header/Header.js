import React from 'react'
import { AppBar, FlatButton } from 'material-ui'

const rightButtons = (count) => (
  <div>
    <FlatButton label='About' href='/about-us' />
    <FlatButton label='Home' href='/' />
    Count: {count}
  </div>
);

const Header = ({count, onMenuClicked}) => (
  <AppBar
    title='The AppBar!'
    onLeftIconButtonClick={() => (onMenuClicked())}
    iconElementRight={rightButtons(count)}
    style={{padding: '1rem'}}
  />
);

export default Header