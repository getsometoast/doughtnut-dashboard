import React, { Component } from 'react'
import { Drawer, MenuItem } from 'material-ui';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class MenuComponent extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	}

	handleMenuItemClick = (page) => {
		return (event) => {
			this.props.history.push(`${page}`);
		}
	}

	MenuComponent = (menuOpen) => (
	  <Drawer
	    open={menuOpen}
	    docked={true}
	    containerStyle={{top: '68px'}}
	    width={200}
	  >
	    <MenuItem onClick={this.handleMenuItemClick('/')}>Home</MenuItem>
	    <MenuItem onClick={this.handleMenuItemClick('/About')}>About</MenuItem>
	  </Drawer>
	)

	render() {
		const menuOpen = this.props.menuOpen;
console.log(`MenuComponent.drawOpen: ${menuOpen}`);
		return this.MenuComponent(menuOpen);
	};
}

export default withRouter(MenuComponent)