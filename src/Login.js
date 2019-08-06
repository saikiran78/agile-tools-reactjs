import React, {useCallback, useContext} from 'react';
import app from 'firebase';
import {Redirect, withRouter, Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {AuthContext} from './Auth';
import Button from 'react-bootstrap/Button';

const Login = ({location, history}) => {

	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			
			const {email, password} = event.target.elements;

			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				history.goBack();
			}
			catch(error) {
				alert(error);
			}
		}
	, [history]);

	const handleGuestLogin = (event, currentUser, updateCurrentUser) => {

			event.preventDefault();

			const {firstName, lastName, accessCode, isChicken} = event.target.elements;
			
			updateCurrentUser({
				firstName: firstName.value, 
				lastName: lastName.value, 
				accessCode: accessCode.value, 
				isChicken: isChicken.value
			});
			
		}

	const {currentUser} = useContext(AuthContext);
	console.log(location.state);
	let { from } = location.state || { from: { pathname: "/" } };

	if(currentUser) {
		return (<Redirect to={from.pathname} />);
	}

	return(
		<AuthContext.Consumer>
			{({currentUser, updateCurrentUser}) => 
				<div className="container login">
					<div className="row justify-content-center">
						<div className="col-sm-6">
							<div className="card">
								<div className="card-header">
									Join a Meeting
								</div>
								<div className="card-body">
									<p>Did someone invited you to a meeting? Please enter details to join the meeting.</p>
									<Form onSubmit={(event) => {
										handleGuestLogin(event, currentUser, updateCurrentUser);
									}}>
										<Form.Group as={Row}>
											<Col>
												<Form.Control 
														required
														type="text"
														name="firstName"
														placeholder="Enter first name"></Form.Control>
											</Col>
											<Col>
												<Form.Control
														required
														type="text"
														name="lastName"
														placeholder="Enter last name"></Form.Control>
												</Col>
										</Form.Group>
										<Form.Group>
											<Form.Control
													required
													type="text"
													name="accessCode"
													placeholder="Enter the access code"></Form.Control>
										</Form.Group>
										<Form.Group>
											<Form.Check 
													name="isChicken"
													type="checkbox"
													label="Are you joining as chicken (listen mode)?"
												/>	
										</Form.Group>
										<Button type="submit"
												variant="success"
												className="float-right">Submit</Button>
									</Form>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="card">
								<div className="card-header">Already registed? Sign In below:</div>
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
			}
		</AuthContext.Consumer>
	);
}

export default withRouter(Login);