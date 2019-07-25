import React, {useCallback, useContext} from 'react';
import app from 'firebase';
import {Redirect, withRouter, Link} from 'react-router-dom';

import {AuthContext} from './Auth';

const Login = ({history}) => {

	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			
			const {email, password} = event.target.elements;

			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push('/');
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
		<div className="container login">
			<div className="row justify-content-center">
				<div className="col-sm-6">
					<div className="card">
						<div className="card-header">Sign In</div>
						<div className="card-body">
						<form onSubmit={handleLogin}>
							<div className="form-group">
								<input type="email" className="form-control" name="email" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="password" placeholder="Enter password" />
							</div>
							<button type="submit" className="btn btn-success float-right">Login</button>
						</form>
						</div>
						<div className="card-footer">
							Don't have an account? <Link to="/signup">Signup here</Link>		
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Login);