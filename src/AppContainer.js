import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Link} from 'react-router-dom';

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
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">Agile tools</Link>
					{
						currentUser &&
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="active" to="/planning">Planning Poker <span className="sr-only">(current)</span></NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="active" to="/retro">Retroboard</NavLink>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<span className="text-white mr-sm-2">
									Welcome {currentUser.email}
								</span>
								<button className="btn btn-success my-2 my-sm-0" onClick={() => app.auth().signOut()}>Logout</button>
							</form>
						</div>
					}
					
				</nav>
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