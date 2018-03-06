import React, { Component } from 'react';

const url = '/about-us'

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>Hello Medium!</p>
      </div>
    );
  }
}

export default {
	component: About,
	url
}