import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({adapter: new Adapter()});

describe('<Button />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button><p>Click me!</p></Button>);
    });

    it('should render children when passed in', () => {
        expect(wrapper.contains(<p>Click me!</p>)).toEqual(true);
    });

    it('should render 1 button tag', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    // it('should simulate a click', () => {
    //     const onButtonClick = () => {};
    //     wrapper.setProps({clicked: onButtonClick});
    //     const spy = jest.spyOn(wrapper, 'clicked');
    //     const button = wrapper.find('button');

    //     button.simulate('click');

    //     expect(spy).toHaveBeenCalled();
    // })
});
