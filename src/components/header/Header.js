import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../images/crown.svg';
import './header.scss';

const Header = ({ currentUser }) => (
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
			{currentUser ? (
				<div className="header__nav-link" onClick={() => auth.signOut()}>
					Sign Out
				</div>
			) : (
				<Link to="/signin" className="header__nav-link">
					Sign In
				</Link>
			)}
		</nav>
	</div>
);

export default Header;
