import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, mapStateToProps } from '.';

describe('Navbar', () => {
    let wrapper;
    beforeEach(function () {
        wrapper = shallow(<Navbar />);
    });

    it('should render without crashing', () => {
        let component = wrapper.find('#navbar');
        expect(component.length).toEqual(1);
    });

    it('should change state after receiveing props', () => {
        wrapper.setProps({
            loginStatus: true
        });
        expect(wrapper.state().loggedIn).toEqual(true);
    });

    it('should change loggedIn state to false on logout', () => {
        wrapper.instance().clear();
        expect(wrapper.state().loggedIn).toBeFalsy();
    });

    it('should map state to props', () =>{
        const mockedState = {
            loginReducer: { loginStatus: true }
        };
        const state = mapStateToProps(mockedState);
        expect(state.loginStatus).toEqual(true);
    });
});