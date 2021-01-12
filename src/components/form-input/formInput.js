import React from 'react';
import './form.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="form-group">
			<input
				className="form-input"
				onChange={handleChange}
				name={otherProps.name}
				type={otherProps.type}
				value={otherProps.value}
			/>
			{label ? (
				<label className={`${otherProps.value.length ? 'shrink' : null} form-label`} htmlFor={otherProps.name}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
