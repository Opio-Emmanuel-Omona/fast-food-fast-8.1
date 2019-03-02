import * as type from '../../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case type.LOGIN_SUCCESSFUL:
            return{
                ...state,
                loginStatus: true
            }
        default:
            return state;
    }
}