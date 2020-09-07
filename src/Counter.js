import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};

		this.increment = this.increment.bind(this);
	}

	increment = () => this.setState(({ count }) => ({ count: count + 1 }));

	render() {
		return (
			<div className="counter_div">
				<button className="counter_button" onClick={() => this.increment()}>
					Get Counts
				</button>
				<h1 className="counter_count">{this.state.count}</h1>
			</div>
		);
	}
}

export default Counter;
