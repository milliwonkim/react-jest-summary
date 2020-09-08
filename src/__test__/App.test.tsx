import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('****<App />****', () => {
	it('Should render <App /> Without Crashing', () => {
		// shallow mount 다 가능
		// 왜?
		let wrapper = shallow(<App />);

		// toBe랑 toEqual은 같은 기능을 하지만,
		// 웬만하면 toEqual을 쓰길(깊은 체크 => '===' 와같음)

		// expect(wrapper.length).toBe(1);
		expect(wrapper.length).toEqual(1);
		expect(wrapper.length).toBeGreaterThan(0);
	});

	it('should render text', () => {
		const wrapper = mount(<App />);
		const text = wrapper.find('h2');
		expect(text.text().includes('0')).toBe(true);

		// or
		// expect(text.text()).toEqual('0');
	});

	it('should render children component', () => {
		const component = mount(<App />);

		const buttonClick = component.find('button.counter_button').simulate('click');
		// console.log(component.find('button.counter_button').first().simulate('click'));
		// component.find('button.counter_button').simulate('click')
		expect(buttonClick.length).toEqual(1);

		// expect(onClick).toBe(1);
	});

	it('should fill the value correctly to input tag', () => {
		const wrapper = shallow(<App />);
		const inputFill = wrapper.find('input');

		inputFill.simulate('focus');
		inputFill.simulate('change', { target: { value: 0 } });

		// <input value="0" />
		expect(inputFill.props().value).toEqual(0);
	});

	it('should access to state called "point"', () => {
		// App 컴포넌트에 point를 props로 넣어주면
		// 위의 'should fill the value correctly to input tag'에도 영향을 줌
		const wrapper = shallow(<App />);
		expect(wrapper.state('point')).toBe(0);

		const inputFill = wrapper.find('input');
		inputFill.simulate('change', { target: { value: 1 } });

		expect(wrapper.state('point')).toBe(1);
	});

	it("should access to div's style", () => {
		const wrapper = mount(<App />);
		const div = wrapper.find('.square');

		expect(div.prop('style')).toHaveProperty('background');
	});

	it('should have shopping list', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state('shoppingList')).toContain('Macbook');
	});

	function compileError() {
		throw new Error('you are intentionally generating ERROR!');
	}

	it('throw an error', () => {
		expect(compileError).toThrow(Error);
	});

	it('should get props', () => {
		const wrapper = mount(<App count={1} />);
		expect(wrapper.props('count').count).toBe(1);
	});

	it('calls componentDidMount', () => {
		const wrapper = shallow(<App />);
		// jest.spyOn(App.prototype, 'componentDidMount');
		// expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);

		//or

		wrapper.instance().componentDidMount();
	});
});

describe('Playground for Testing With Jest & Enzyme', () => {
	it('should be return undefined', () => {
		// let foo;

		let foo = () => {};
		const canBeUndefined = 'a';
		const canBeUndefined2 = foo();

		expect(canBeUndefined).not.toBe(undefined);
		expect(canBeUndefined2).toBe(undefined);

		// result: not undefined
		// 그러므로 fail => canBeUndefined는 선언은 됐지만 할당은 안됨
		// 따라서 할당된 값은 undefined임

		// 오류들
		// expect(canBeUndefined2).not.toBe(undefined);
		// expect(canBeUndefined).toBe(undefined);
	});

	// it('Mocking Global Functions - First Test', () => {
	// 	const mockingGlobalFunction = () => {
	// 		return Date.now();
	// 	};

	// 	expect(mockingGlobalFunction()).toEqual(Date.now());
	// });
});
