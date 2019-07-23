import React, {useCallback} from 'react';
import {withRouter} from 'react-router-dom';
import app from 'firebase';

const SignUp = ({history}) => {

	const handleSignUp = useCallback(async event => {
		event.preventDefault();
		
		const {email, password} = event.target.elements;

		try {
			await app.auth().createUserWithEmailAndPassword(email.value, password.value);
			history.push("/");
		}
		catch (error) {
			alert(error);
		}
		alert(email.value);
		alert(password.value);
	}, [history]);

	return (
		<div>
			<h2>Sign Up</h2>
			<form onSubmit={handleSignUp}>
				<label>
					Email:
					<input type="email" name="email" placeholder="Email" />
				</label>		
				<label>
					Password:
					<input type="password" name="password" placeholder="Password" />
				</label>
				<br/>
				<br/>
				<button type="submit">Sign up</button>
			</form>
		</div>
	);
}

export default withRouter(SignUp);