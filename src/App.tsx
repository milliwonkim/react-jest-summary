// App.tsx

import React from 'react';
import Counter from './Counter';
import './App.css';

interface IApp {
	point: number;
	shoppingList: string[];
}

class App extends React.Component<{}, IApp> {
	state: IApp = {
		point: 0,
		shoppingList: [ 'Macbook', 'iphone', 'ipad' ]
	};

	// Maximum update
	// componentDidUpdate() {
	// 	const point = this.state.point;

	// 	this.setState({
	// 		point: point + 1
	// 	});
	// }

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentDidMount() {
		this.setState({
			point: 0
		});
	}

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({
			point: value
		});
	};

	render(): JSX.Element {
		const point = this.state.point;
		const shoppingList = this.state.shoppingList;

		return (
			<div className="App">
				<Counter />
				<input className="point_input" type="text" value={point} onChange={(e) => this.handleChange(e)} />
				<h2>{point}</h2>
				<h5>{shoppingList}</h5>
				<div className="square" style={{ background: 'red', width: '30px', height: '30px' }} />
			</div>
		);
	}
}

export default App;
