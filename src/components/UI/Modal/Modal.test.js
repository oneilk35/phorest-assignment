import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal';
import Aux from '../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop';

configure({adapter: new Adapter()});

describe('<Modal />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Modal>
            <div className="childComponent"><p>Render</p></div>
        </Modal>);
    });

    it('should render children when passed in', () => {
        expect(wrapper.contains(<div className="childComponent"><p>Render</p></div>)).toEqual(true);
    });

    it('should render 1 Backdrop component', () => {
        expect(wrapper.find(Backdrop)).toHaveLength(1);
    });

    it('should render 1 Aux component', () => {
        expect(wrapper.find(Aux)).toHaveLength(1);
    });


});
