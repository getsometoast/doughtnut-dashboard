import React, { Component } from 'react';
import Header from './headerPresentation'

export default class Header extends Component {

  constructor(props) {
    super(props);
  };

  sendMenuClicked = () => (

  );

	render() {
		return (
			<Header handleMenuClicked={sendMenuClicked()} count={props.count}/>
		);
	}
}
