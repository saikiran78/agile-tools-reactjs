import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import { AuthProvider } from './Auth';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
		<Router>
			<PrivateRoute exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={SignUp} />
		</Router>
  );
}	

export default App;
