import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InfoRow from './InfoRow';

configure({adapter: new Adapter()});

describe('<Input />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<InfoRow left="Name" right="Kevin O'Neill"/>);
    });

    it('should render 2 p elements', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });

});
