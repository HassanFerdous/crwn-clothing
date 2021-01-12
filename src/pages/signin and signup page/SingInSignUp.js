import React from 'react';
import './signin-signup.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

function SingInSignUp(props) {
	return (
		<div className="signin-signup">
			<SignIn />
			<SignUp />
		</div>
	);
}

export default SingInSignUp;
