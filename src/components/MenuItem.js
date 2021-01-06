import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, img, size, link }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className="menu-item__bg"
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<div className="menu-item__content">
				<h1 class="menu-item__title">{title.toUpperCase()}</h1>
				<span className="menu-item__subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
