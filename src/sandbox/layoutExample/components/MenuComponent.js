import React, { Component } from 'react'
import { Drawer, MenuItem } from 'material-ui';
import { withRouter } from 'react-router'

class MenuComponent extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	}

	const handleMenuItemClick = (page) => {
		return (event) => {
			this.props.history.push(`${page}`);
		}
	}

	const MenuComponent = ({drawerOpen}) => (
	  <Drawer
	    open={drawerOpen}
	    docked={true}
	    containerStyle={{top: '68px'}}
	    width={200}
	  >
	    <MenuItem onClick={this.handleMenuItemClick('/')}>Home</MenuItem>
	    <MenuItem onClick={this.handleMenuItemClick('/About')}>About</MenuItem>
	  </Drawer>
	)

	render() {
		const drawOpen = this.props.drawOpen;

		return this.MenuComponent(drawOpen);
	};
}

export default withRouter(MenuComponent)