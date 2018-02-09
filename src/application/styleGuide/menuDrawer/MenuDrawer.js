import React from 'react'
import { Drawer, MenuItem } from 'material-ui';

// todo - this should be using the history component to change the location...
const MenuDrawer = ({drawerOpen}) => (
  <Drawer
    open={drawerOpen}
    docked={true}
    containerStyle={{top: '68px'}}
    width={200}
  >
    <MenuItem href='/'>Home</MenuItem>
    <MenuItem href='/about-us'>About</MenuItem>
  </Drawer>
);

export default MenuDrawer
