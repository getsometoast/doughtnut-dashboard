import React from 'react'
import { Drawer, MenuItem } from 'material-ui';
import { withRouter } from 'react-router'

// todo - create on click for the menuitems
const handleMenuItemClick = (page) => {
	return (event) => {
		//history.push(`/blah/blah${page}`);
	}
}

const MenuComponent = ({drawerOpen}) => (
  <Drawer
    open={drawerOpen}
    docked={true}
    containerStyle={{top: '68px'}}
    width={200}
  >
    <MenuItem>Home</MenuItem>
    <MenuItem>About</MenuItem>
  </Drawer>
);

export default withRouter(MenuComponent)
