import React, { Component } from 'react';
import FormInput from '../form-input/formInput';
import '../form-input/form.scss';
import CustomButton from '../button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h1 className="sign-in__title">I already have an Account</h1>
				<span className="sign-in__subtitle">
					Signin with your email and password
				</span>
				<form onSubmit={this.handleSubmit} className="sign-up__form">
					<FormInput
						type="name"
						name="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="Password"
						requiredP
					/>

					<CustomButton type="submit"> Submit form</CustomButton>

					<CustomButton onClick={signInWithGoogle}>
						Sign in with Google
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
