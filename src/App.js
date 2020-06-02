import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
// Provider component makes Redux store available to any nested components wrapped in connect() function
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">Tmrz</p>
				</div>
			</Provider>
		);
	}
}

export default App;
