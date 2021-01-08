import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/crown.svg';
import './header.scss';

const Header = () => (
	<div className="header">
		<Link to="/">
			<Logo />
		</Link>
		<nav className="header__nav">
			<Link to="/shop" className="header__nav-link">
				Shop
			</Link>
			<Link to="/contact" className="header__nav-link">
				Contact
			</Link>
		</nav>
	</div>
);

export default Header;
