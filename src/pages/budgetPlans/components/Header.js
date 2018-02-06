import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';

class Header extends Component {

  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     //this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    // if(nextProps.deletedPost.error && nextProps.deletedPost.error.message) {//delete failure
    //   alert(nextProps.deletedPost.error.message || 'Could not delete. Please try again.');
    // } else if(nextProps.deletedPost.post && !nextProps.deletedPost.error) {//delete success
    //   this.context.router.push('/');
    // } else if(this.props.user.user && !nextProps.user.user) {//logout (had user(this.props.user.user) but no loger the case (!nextProps.user.user))
    //   this.context.router.push('/');
    // }
  }

  renderSignInLinks(authenticatedUser) {
    if(authenticatedUser) {
      return (
        <ul className="nav  nav-pills navbar-right">

        </ul>
      );
    }
  }

	renderLinks() {
		const { type, authenticatedUser } = this.props;
    if(type === 'posts_new') {
       return (
        <div className="container">
      
        </div>
  		 ); 
  	}
	};

	render() {
			return (
			 <nav className="navbar navbar-default navbar-static-top">
			      <div id="navbar" className="navbar-collapse collapse">
			      {this.renderLinks()}
	      		</div> 
			 </nav>
			);
	}
}

export default Header