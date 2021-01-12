import './App.css';
import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SingInSignUp from './pages/signin and signup page/SingInSignUp';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Contact from './pages/contact/contact';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFormAuth = null;
	componentDidMount() {
		this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
					console.log(this.state);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFormAuth();
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Header currentUser={this.state.currentUser} />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/shop" component={Shop} />
						<Route exact path="/signin" component={SingInSignUp} />
						<Route exact path="/contact" component={Contact} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
