import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ title, img, size, link, history }) => {
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${link}`)}>
			<div className="menu-item__bg" style={{ backgroundImage: `url(${img})` }}></div>
			<div className="menu-item__content">
				<h1 className="menu-item__title">{title.toUpperCase()}</h1>
				<span className="menu-item__subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
