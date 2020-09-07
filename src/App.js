import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			point: 0,
			shoppingList: [ 'Macbook', 'iphone', 'ipad' ]
		};
	}

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({
			point: value
		});
	};

	render() {
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
