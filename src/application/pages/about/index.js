import React, { Component } from 'react';
import Route from 'react-router-dom/Route'

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

export default (<Route path='/about-us' component={About} />);