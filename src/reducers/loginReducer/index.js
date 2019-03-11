import * as type from '../../actions/types';

const initialState = {
    loginStatus: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case type.LOGIN_SUCCESSFUL:
            return {
                ...state,
                loginStatus: true,
                username: action.payload.username
            };
        case type.LOGIN_ERROR:
            return {
                ...state,
                loginStatus: false,
                message: action.message
            };
        case type.LOGOUT_SUCCESS:
            return {
                ...state,
                loginStatus: false,
                username: ''
            };
        default:
            return state;
    }
}
