import React from 'react';
import './buttons.scss';

const CustomButton = ({ children, ...otherProps }) => (
	<button className="custom-button" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
