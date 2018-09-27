import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

describe('<Backdrop />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Backdrop />);
    });


    it('should no div if show prop is null', () => {
        expect(wrapper.find('div')).toHaveLength(0);
    });

    // it('should simulate a click', () => {
    //     const onBackdropClick = () => {};
    //     wrapper.setProps({clicked: onBackdropClick});
    //     const spy = jest.spyOn(wrapper, 'clicked');
    //     const button = wrapper.find('button');

    //     button.simulate('click');

    //     expect(spy).toHaveBeenCalled();
    // })
});
