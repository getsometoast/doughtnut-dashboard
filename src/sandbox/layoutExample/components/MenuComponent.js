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

	// TODO - Figure out how to just change the one page in the page container for the routes....

	MenuComponent = (menuOpen) => (
	  <Drawer
	    open={menuOpen}
	    docked={true}
	    containerStyle={{top: '68px'}}
	    width={200}
	  >
	    <MenuItem onClick={this.handleMenuItemClick('/sandbox/layoutExample/examplePage/1')}>Example Page 1</MenuItem>
	    <MenuItem onClick={this.handleMenuItemClick('/sandbox/layoutExample/examplePage/2')}>Example Page 2</MenuItem>
	  </Drawer>
	)

	render() {
		const menuOpen = this.props.menuOpen;
		return this.MenuComponent(menuOpen);
	};
}

export default withRouter(MenuComponent)