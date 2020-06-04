import React, { Component } from 'react';
import { connect } from 'react-redux';
// Import actio to add new Timer
import { addTimer } from '../actions';

class NewTimer extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };
	}
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Add Timer Name"
					name="name"
					value={this.state.name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button
					onClick={(e) => {
						this.props.addTimer(this.state.name);
					}}
				>
					Save Timer
				</button>
			</div>
		);
	}
}

// Not needed ?
const mapStateToProps = (state) => {
	return {};
};

// Connects newTimer action creator to this component
const mapDispatchToProps = () => {
	return { addTimer };
};

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer);