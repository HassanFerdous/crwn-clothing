import React from 'react';
import './buttons.scss';

const CustomButton = ({ children, isgoogleLogin, ...otherProps }) => (
	<button className={`${isgoogleLogin ? 'google-login' : null} custom-button`} {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
