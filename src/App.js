import './App.css';
import React from 'react';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SingInSignUp from './pages/signin and signup page/SingInSignUp';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Contact from './pages/contact/contact';
import { connect } from 'react-redux';
import { setCurrrentUser } from './redux/user/use.actions';

class App extends Component {
	unsubscribeFormAuth = null;
	componentDidMount() {
		const { setCurrrentUser } = this.props;
		this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					setCurrrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrrentUser({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFormAuth();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/signin" component={SingInSignUp} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrrentUser: user => dispatch(setCurrrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
