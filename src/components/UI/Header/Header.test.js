import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({adapter: new Adapter()});

describe('<Header />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header/>);
    });

    it('should render 1 img tag', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('should render 1 h2 tag', () => {
        expect(wrapper.find('h2')).toHaveLength(1);
    });

});
