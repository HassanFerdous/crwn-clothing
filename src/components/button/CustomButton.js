import React from 'react';
import './buttons.scss';

const CustomButton = ({ children, isgoogleLogin, inverted, ...otherProps }) => (
	<button
		className={`${inverted ? 'inverted' : null} ${isgoogleLogin ? 'google-login' : null} custom-button`}
		{...otherProps}>
		{children}
	</button>
);

export default CustomButton;
