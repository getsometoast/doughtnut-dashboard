import React, {Component} from 'react';
import Route from 'react-router-dom/Route'

class ChildRouteLoader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: props.url || '',
			routes: props.routes
		};
	}

  render() {
    return (
			<div>
				{this.state.routes.map(route => {
					return route.routes ? 
					<ChildRouteLoader url={`${this.state.url}${route.url}`} routes={route.routes} /> :
					<Route path={`${this.state.url}${route.url}`} component={route.component} />;
				})}
      </div>
    );
  }
}

export default ChildRouteLoader;