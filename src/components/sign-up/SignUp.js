import React, { Component } from 'react';
import './sign-up.scss';
import CustomButton from '../button/CustomButton';
import FormInput from '../form-input/formInput';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Password don'n match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						handleChange={this.handleChange}
						value={displayName}
						label="Name"
						required
					/>

					<FormInput
						type="email"
						name="email"
						handleChange={this.handleChange}
						value={email}
						label="Email"
						required
					/>

					<FormInput
						type="password"
						name="password"
						handleChange={this.handleChange}
						value={password}
						label="Password"
						required
					/>

					<FormInput
						type="password"
						name="confirmPassword"
						handleChange={this.handleChange}
						value={confirmPassword}
						label="Confirm Password"
						required
					/>

					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
