import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapStateToProps } from '.';

describe('Signup', () =>{
    const testValues = {
        username: 'username',
        password: 'password',
        email: 'email@domain.com',
        phone: '+256773480077',
        confirm: 'password'
    };

    const props = {
        signupStatus: true,
        history: { push: jest.fn() },
        signup: jest.fn()
    };

    let wrapper;
    beforeEach( function () {
        wrapper = shallow(<Signup {...props} />);
    });

    afterEach( function () {
        wrapper = null;
    });

    it('should contain one form', () => {
        let component = wrapper.find('#signupForm');
        expect(component.length).toEqual(1);
    });

    it('should change state on change of an input field', () => {
        wrapper.find('#signupUsernameInput').simulate('change', {
            target: {
                name: 'userName',
                value: testValues.username,
            },
        });
        wrapper.find('#signupUsernameInput').simulate('change', {
            target: {
                name: 'username',
                value: testValues.username,
            },
        });
        wrapper.find('#signupPhoneInput').simulate('change', {
            target: {
                name: 'phone',
                value: testValues.phone,
            },
        });
        wrapper.find('#signupEmailInput').simulate('change', {
            target: {
                name: 'email',
                value: testValues.email,
            },
        });
        wrapper.find('#signupConfirmInput').simulate('change', {
            target: {
                name: 'confirm',
                value: testValues.confirm,
            },
        });
        wrapper.find('#signupPasswordInput').simulate('change', {
            target: {
                name: 'password',
                value: testValues.password,
            },
        });

        expect(wrapper.state().username).toEqual('username');
        expect(wrapper.state().password).toEqual('password');
        expect(wrapper.state().email).toEqual('email@domain.com');
        expect(wrapper.state().phone).toEqual('+256773480077');
        expect(wrapper.state().confirm).toEqual('password');
    });

    // POSITIVE TEST
    it('should call the signup fn() when submitting form without errors', () => {
        wrapper.setProps({
            props
        });
        wrapper.instance().setState({
            userName: 'username',
            password: 'password',
            email: 'email',
            phone: 'phone',
            confirm: 'confirm',
            formErrors: {
                userName: '',
                password:'',
                phone: '',
                confirm: '',
                email: ''
            },
            login: jest.fn(),
        });
        wrapper.find('form').simulate('submit', { preventDefault()  {}, });
        expect(props.signup).toHaveBeenCalled();
    });

    // NEGATIVE TEST
    it('should NOT call the signup fn() when submitting form with errors', () => {
        wrapper.find('form').simulate('submit', { preventDefault()  {}, });
        expect(props.signup).toHaveBeenCalledTimes(0);
    });

    it('should map states to props', () => {
        const mockState = {
            signupReducer: { signupStatus: true }
        };
        const state = mapStateToProps(mockState);
        expect(state.signupStatus).toBeTruthy();
    });
});