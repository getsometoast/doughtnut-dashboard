import React, { Component } from 'react';

class PageComponent extends Component {

  title = 'Master Page Layout Example Page 1';

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>I'm a page</p>
      </div>
    )
  }
}

export default PageComponent
