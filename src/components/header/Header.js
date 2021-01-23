import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../images/crown.svg';
import './header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to="/">
			<Logo />
		</Link>
		{/* {console.log(currentUser)} */}
		{/* {currentUser ? console.log(currentUser) : console.log('false')} */}
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
			<CartIcon />
		</nav>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
	hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
