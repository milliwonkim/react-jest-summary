// Counter.tsx

import React, { Component } from 'react';

interface ICounter {
	count: number;
}

class Counter extends Component<{}, ICounter> {
	state = {
		count: 0
	};

	increment = (): void => this.setState({ count: this.state.count + 1 });

	render(): JSX.Element {
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
