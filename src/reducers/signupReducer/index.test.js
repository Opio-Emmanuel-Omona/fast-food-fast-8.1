import signupReducer from '.';
import * as types from '../../actions/types';

describe('signup Reducer', () => {
    it('should return change signup state to true on succesful signup', () => {
        let action = {
            type: types.SIGNUP_SUCCESSFUL,
        };

        let state = signupReducer({}, action);
        expect(state.signupStatus).toBeTruthy();
    });

    it('should return the initial state if no action type is present', () => {
        let action = { type: null };
        let initialState = { loginStatus: false };
        let state = signupReducer(initialState, action);
        expect(state.signupStatus).toBeFalsy();
    });

    it('should return false on unsuccessful signup', () => {
        let action = { type: types.SIGNUP_ERROR };
        let state = signupReducer({}, action);
        expect(state.signupStatus).toBeFalsy();
    });
});
