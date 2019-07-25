import React, {useCallback} from 'react';
import {withRouter, Link} from 'react-router-dom';
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
		<div className="container signup">
			<div className="row justify-content-center">
				<div className="col-sm-6">
					<div className="card">
						<div className="card-header">Sign Up</div>
						<div className="card-body">
						<form onSubmit={handleSignUp}>
							{/* <div class="row">
								<div class="col-xs-6 col-md-6 form-group">
									<input type="text" name="firstname" class="form-control input-lg" placeholder="First Name"  />    
								</div>
								<div class="col-xs-6 col-md-6 form-group">
									<input type="text" name="lastname" class="form-control input-lg" placeholder="Last Name"  />
								</div>
							</div> */}
							<div className="form-group">
								<input type="email" className="form-control" name="email" placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="password" placeholder="Password" />
							</div>
							{/* <div className="form-group">
								<input type="password" className="form-control" name="confirmpassword" placeholder="Confirm Password" />
							</div> */}
							<button type="submit" className="btn btn-success float-right">Sign up</button>
						</form>
						</div>
						<div className="card-footer">
							Already registered? <Link to="/login">Login here</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(SignUp);