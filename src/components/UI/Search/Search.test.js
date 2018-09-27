import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import Input from '../Input/Input';
import Button from '../Button/Button';
import DropdownSelect from '../DropdownSelect/DropdownSelect';

configure({adapter: new Adapter()});

describe('<Search />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Search />);
    });

    it('should render 1 Input component', () => {
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('should render 1 DropdownSelect component', () => {
        expect(wrapper.find(DropdownSelect)).toHaveLength(1);
    });

    it('should render 1 Button component', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });
});
