import { SIGNUP_SUCCESSFUL } from '../types';
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
                toast.error(res.data.message);
            }
        }).catch(err => {
            console.log(err);
        });
};

export default signup;
