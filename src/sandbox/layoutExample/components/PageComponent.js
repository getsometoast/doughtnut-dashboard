import React, { Component } from 'react';

class PageComponent extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.content.title}</h1>
        <p>{this.props.content.article}</p>
      </div>
    )
  }
}

export default PageComponent
