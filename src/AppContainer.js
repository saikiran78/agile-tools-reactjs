import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {AuthContext} from './Auth';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import PlanningPokerHome from './PlanningPokerHome';
import RetroBoardHome from './RetroBoardHome';

const AppContainer = () => {

	const {currentUser} = useContext(AuthContext);

	return (
		<div className='main'>
			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<PrivateRoute exact path="/planning" component={PlanningPokerHome} />
					<PrivateRoute exact path="/retro" component={RetroBoardHome}/>
					
					<PrivateRoute exact path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default AppContainer;