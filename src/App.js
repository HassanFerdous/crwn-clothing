import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={Shop} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
