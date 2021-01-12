import React, { Component } from 'react';
import FormInput from '../form-input/formInput';
import './sign-in.scss';
import CustomButton from '../button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h1 className="sign-in__title">I already have an Account</h1>
				<span className="sign-in__subtitle">Signin with your email and password</span>
				<form onSubmit={this.handleSubmit} className="sign-up__form">
					<FormInput
						type="name"
						name="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
						id="signup-email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="Password"
						id="signin-password"
						required
					/>

					<div className="buttons">
						<CustomButton type="submit"> Submit form</CustomButton>
						<CustomButton onClick={signInWithGoogle} isgoogleLogin>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
