import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
// Provider component makes Redux store available to any nested components wrapped in connect() function
import { Provider } from 'react-redux';
import reducers from './reducers';

// Import Timer components
import NewTimer from './components/new-timer';
import ListTimers from './components/list-timers';

const store = createStore(reducers);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<h2 className="title">You're just in time</h2>
						<h1 className="title">It's Timer Time</h1>
					</header>
					{/* Timer Components */}
					<NewTimer />
					<ListTimers />
				</div>
			</Provider>
		);
	}
}

export default App;
