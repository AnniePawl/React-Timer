import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { loadState, saveState } from './utils';
import throttle from 'lodash/throttle';
// Provider component makes Redux store available to any nested components wrapped in connect() function
import { Provider } from 'react-redux';
import reducers from './reducers';
import { update } from './actions';

// Import Timer components
import NewTimer from './components/new-timer';
import ListTimers from './components/list-timers';

// const store = createStore(reducers);

// Deal w/ Timer State
const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}, 1000)
);

// Update timers every 50 ms
let lastUpdateTime = Date.now();
setInterval(() => {
	const now = Date.now();
	const deltaTime = now - lastUpdateTime;
	lastUpdateTime = now;
	store.dispatch(update(deltaTime));
}, 50);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<h1 className="title">It's Time to Time</h1>
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
