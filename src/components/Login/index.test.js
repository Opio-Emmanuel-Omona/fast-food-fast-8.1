import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps } from '.';

describe('Login', () => {
    let wrapper;

    const testValues = {
        username: 'username',
        password: 'password',
        handleSubmit: jest.fn(),
    };

    const props = {
        history: {push: jest.fn()},
        loginStatus: true,
        login: jest.fn()
    };

    beforeEach(function () {
        wrapper  = shallow(<Login {...props}/>);
    });

    afterEach( function () {
        wrapper = null;
    });

    it('should contain one form', () => {
        let component = wrapper.find('#loginForm');
        expect(component.length).toEqual(1);
    });

    it('should change state after a change in a form input', () =>{
        wrapper.find('#loginUsernameInput').simulate('change', {
            target: {
                name: 'username',
                value: testValues.username,
            },
        });
        wrapper.find('#loginPasswordInput').simulate('change', {
            target: {
                name: 'password',
                value: testValues.password,
            },
        });
        wrapper.find('#loginPasswordInput').simulate('change', {
            target: {
                name: 'passwords',
                value: testValues.password,
            },
        });

    
        expect(wrapper.state().username).toEqual('username');
        expect(wrapper.state().password).toEqual('password');
    });

    // POSITVE TEST
    it('should call login fn() when submitting form without errors', () => {
        wrapper.setProps({
            props
        });
        wrapper.instance().setState({
            username: 'username',
            password: 'password',
            formErrors: {
                username: '',
                password: ''
            },
            login: jest.fn(),
        });
        wrapper.find('form').simulate('submit', { preventDefault()  {}, });
        expect(props.login).toHaveBeenCalled();
    });

    // NEGATIVE TEST
    it('should NOT call login fn() when submitting form with errors', () => {
        wrapper.find('form').simulate('submit', { preventDefault()  {}, });
        expect(props.login).toHaveBeenCalledTimes(0);
    });

    it('should map state to props', () => {
        const mockedState = {
            loginReducer: { loginStatus: true }
        };
        const state = mapStateToProps(mockedState);
        expect(state.loginStatus).toEqual(true);
    });

});