import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTimer } from '../actions';

class TimerView extends Component {
	constructor(props) {
		super(props);
	}

	// Timer needs name, time, stop/stop button
	render() {
		// need these props for component
		const { index, toggleTimer, timer } = this.props;

		return (
			<div>
				<h2>{timer.name}</h2>
				<h1>{timer.time}</h1>
				<button
					// uses index to get action for timer
					onClick={(e) => {
						toggleTimer(index);
					}}
				>
					{/* Text depends on on/off */}
					{timer.isRunning ? 'Stop' : 'Start'}
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

// Use toggleTimer action
const mapDispatchToProps = () => {
	return { toggleTimer };
};

export default connect(mapStateToProps, mapDispatchToProps())(TimerView);
