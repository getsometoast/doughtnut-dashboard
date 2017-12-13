import React from 'react'
import { Drawer, MenuItem } from 'material-ui';

const MenuDrawer = ({open}) => (
  <Drawer
    open={open}
    docked={true}
    containerStyle={{top: '68px'}}
    width={200}
  >
    <MenuItem href='/'>Home</MenuItem>
    <MenuItem href='/about-us'>About</MenuItem>
  </Drawer>
);

export default MenuDrawer
