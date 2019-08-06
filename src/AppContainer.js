import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import app from './firebase';
import {AuthContext} from './Auth';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import PlanningPokerHome from './PlanningPoker/PlanningPokerHome';
import RetroBoardHome from './RetroBoard/RetroBoardHome'; 

const AppContainer = () => {

	const {currentUser} = useContext(AuthContext);

	return (
		<div className='main'>
			<Router>
				<nav className="navbar navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">Agile tools</Link>
					{
						currentUser &&
						<div className="float-right">
							<span className="text-white mr-sm-2">
								Welcome {currentUser 
											? currentUser.firstName + ' ' + currentUser.lastName
											: currentUser.email} 
							</span>
							{	currentUser.uid &&
								<button className="btn btn-success my-2 my-sm-0" onClick={() => app.auth().signOut()}>Logout</button>
							}
						</div>
					}
					
				</nav>
			<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<PrivateRoute exact path="/planning/:planningId" component={PlanningPokerHome} />
					<PrivateRoute exact path="/retro" component={RetroBoardHome}/>
					
					<PrivateRoute exact path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default AppContainer;