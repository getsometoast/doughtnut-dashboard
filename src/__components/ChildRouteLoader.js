import React, {Component} from 'react';
import Route from 'react-router-dom/Route'

class ChildRouteLoader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routes: props.routes,
			urlPrefix: props.urlPrefix || '',
		};
	}

  render() {
    return (
			<div>
				{this.state.routes.map(route => {
	        return (<Route path={`${this.state.urlPrefix}${route.url}`} component={route.component} />);
	      })}
      </div>
    );
  }
}

export default ChildRouteLoader;