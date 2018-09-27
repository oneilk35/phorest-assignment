import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({adapter: new Adapter()});

describe('<Input />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Input type="text"/>);
    });

    it('should render 1 input element with', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });

});
