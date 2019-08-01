import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({component: Component, ...rest}) => {

	const {currentUser} = useContext(AuthContext);
	return (
		<Route {...rest} 
			render={ routeProps => 			
				!!currentUser ?
				(<Component {...routeProps} />)	:
				(<Redirect to={{
					pathname: '/login',
					state: { from: routeProps.location }
				}} />) }
		/>
	);
}

export default PrivateRoute;