import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SingInSignUp from './pages/signin and signup page/SingInSignUp';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/signin" component={SingInSignUp} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
