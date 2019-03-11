import { SIGNUP_SUCCESSFUL, SIGNUP_ERROR } from '../types';
import { toast } from 'react-toastify';
import axios from 'axios';

let url = 'http://fast-food-fast-op.herokuapp.com/api/v2/auth/signup';
let headers = { 'Content-type': 'application/json' };
const signup = (signup_detail) => dispatch => {
    axios.post(url, signup_detail, {headers} )
        .then(res => {
            if(res.data.status){
                dispatch({
                    type: SIGNUP_SUCCESSFUL,
                    payload: res.data
                });
                toast.success('Account Created');
            }
            else{
                dispatch({
                    type: SIGNUP_ERROR,
                    message: res.data.message
                });
                toast.error(res.data.message);
            }
        }).catch(err => {
            dispatch({
                type: SIGNUP_ERROR,
                message: err.response.data.message
            });
            toast.error(err.response.data.message);
        });
};

export default signup;
