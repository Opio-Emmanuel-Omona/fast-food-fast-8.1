import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    signupReducer,
    loginReducer
});

export default rootReducer;