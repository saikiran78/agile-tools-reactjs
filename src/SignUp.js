import React, {useCallback} from 'react';
import {withRouter, Link} from 'react-router-dom';
import app from 'firebase';

class SignUp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			fields: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: ''},
			errors: {
				firstName: false,
				lastName: false,
				email: false,
				password: false,
				confirmPassword: false,
				invalidEmail: false,
				matchPassword: false
			},
			isFormValid: true
		}

		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	handleSignUp(event) {
		event.preventDefault();
		const history = this.props.history; 

		if(this.validateForm()) {
			this.setState({
				errors: {
					firstName: false,
					lastName: false,
					email: false,
					password: false,
					confirmPassword: false,
					invalidEmail: false,
					matchPassword: false
				}
			});
		
			app.auth()
				.createUserWithEmailAndPassword(this.state.fields.email, this.state.fields.password)
				.then(() => {
					history.push("/");
				})
				.catch (error => {
					alert(error);
				});
		}
	}

	validateForm() {
		let formIsValid = true;
		let fields = this.state.fields;
		let errors = {};

		if(!fields.firstName) {
			formIsValid = false;
			errors.firstName = true;
		}

		if(!fields.lastName) {
			formIsValid = false;
			errors.lastName = true;
		}

		if(!fields.email) {
			formIsValid = false;
			errors.email = true;
		}
		
		var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(fields.email && !regexEmail.test(fields.email)) {
			formIsValid = false;
			errors.invalidEmail = true;
		}

		if(!fields.password) {
			formIsValid = false;
			errors.password = true;
		}

		if(!fields.confirmPassword) {
			formIsValid = false;
			errors.confirmPassword = true;
		}

		if(fields.password && fields.confirmPassword && fields.password !== fields.confirmPassword) {
			formIsValid = false;
			errors.matchPassword = true;
		}

		this.setState({
			errors: errors,
			isFormValid: formIsValid
		});
		return formIsValid;
	}

	handleChange(event) {
		let fields = this.state.fields;
		let errors = this.state.errors;
		fields[event.target.name] = event.target.value;
		if(fields[event.target.name]) {
			errors[event.target.name] = false
		}
		this.setState({fields});
		this.setState({errors});
	}

	render() {
		return (
			<div className="container signup">
				<div className="row justify-content-center">
					<div className="col-sm-6">
						<div className="card">
							<div className="card-header">Sign Up</div>
							<div className="card-body">
							<form onSubmit={this.handleSignUp} noValidate>
								<div className="row">
									<div className="col-xs-6 col-md-6 form-group">
										<input type="text" name="firstName" 
												className={"form-control" + (this.state.errors.firstName ? " is-invalid": "")} 
												placeholder="First Name"
												value={this.state.fields.firstName}
												onChange={this.handleChange}  /> 
										{this.state.errors.firstName && <div className="invalid-feedback">Please enter first name</div>}   
									</div>
									<div className="col-xs-6 col-md-6 form-group">
										<input type="text" name="lastName" 
												className={"form-control" + (this.state.errors.lastName ? " is-invalid": "")}  
												placeholder="Last Name"
												value={this.state.fields.lastName}
												onChange={this.handleChange}  />
										{this.state.errors.lastName && <div className="invalid-feedback">Please enter last name</div>}
									</div>
								</div>
								<div className="form-group">
									<input type="email" className={"form-control" + (this.state.errors.email || this.state.errors.invalidEmail ? " is-invalid": "")}  
											name="email" 
											placeholder="Email"
											value={this.state.fields.email}
											onChange={this.handleChange} />
									{this.state.errors.email && <div className="invalid-feedback">Please enter an email</div>}
									{this.state.errors.invalidEmail && <div className="invalid-feedback">Please enter a valid email</div>}
								</div>
								<div className="form-group">
									<input type="password" className={"form-control" + (this.state.errors.password ? " is-invalid": "")}  
											name="password" 
											placeholder="Password"
											value={this.state.fields.password}
											onChange={this.handleChange} />
									{this.state.errors.password && <div className="invalid-feedback">Please enter a password</div>}
								</div>
								<div className="form-group">
									<input type="password" className={"form-control" + (this.state.errors.confirmPassword || this.state.errors.matchPassword ? " is-invalid": "")}  
											name="confirmPassword" 
											placeholder="Confirm Password"
											value={this.state.fields.confirmPassword}
											onChange={this.handleChange} />
									{this.state.errors.confirmPassword && <div className="invalid-feedback">Please enter a password</div>}
									{this.state.errors.matchPassword && <div className="invalid-feedback">Password should match</div>}
								</div>
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
}

export default withRouter(SignUp);