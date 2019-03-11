import * as type from '../../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case type.SIGNUP_SUCCESSFUL:
            return {
                ...state,
                signupStatus: true
            };
        case type.SIGNUP_ERROR:
            return {
                ...state,
                message: action.message,
                signupStatus: false
            };
        default:
            return state;
    }
}
