import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

	const currentUser = false;

	return (
		<Route {...rest} 
			render={ routeProps => 			
				!!currentUser ?
				(<Component {...routeProps} />)	:
				(<Redirect to="/login" />) }
		/>
	);
}

export default PrivateRoute;