import React, {useCallback, useContext} from 'react';
import app from 'firebase';
import {Redirect, withRouter} from 'react-router-dom';

import {AuthContext} from './Auth';

const Login = ({history}) => {

	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			
			const {email, password} = event.target.elements;

			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push("/");
			}
			catch(error) {
				alert(error);
			}
		}
	, [history]);

	const {currentUser} = useContext(AuthContext);

	if(currentUser) {
		return (<Redirect to="/" />);
	}

	return(
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<label>
					Email:
					<input type="email" name="email" placeholder="Enter email" />
				</label>
				<label>
					Password:
					<input type="password" name="password" placeholder="Enter password" />
				</label><br/><br/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default withRouter(Login);