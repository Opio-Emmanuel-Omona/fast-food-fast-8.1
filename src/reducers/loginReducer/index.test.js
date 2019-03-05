import loginReducer from '.';
import * as types from '../../actions/types';

describe('login Reducer', () => {
    it('should return change login state to true on succesful login', () => {
        let action = {
            type: types.LOGIN_SUCCESSFUL,
            payload: { username: 'emmanuel' }
        };

        let state = loginReducer({}, action);
        expect(state.loginStatus).toBeTruthy();
        expect(state.username).toEqual('emmanuel');
    });

    it('should return the initial state if no action type is present', () => {
        let action = { type: null };
        let initialState = { loginStatus: false };
        let state = loginReducer(initialState, action);
        expect(state.loginStatus).toBeFalsy();
    });
});