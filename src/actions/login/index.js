import { LOGIN_SUCCESSFUL, LOGIN_ERROR, LOGOUT_SUCCESS } from '../types';
import { toast } from 'react-toastify';
import axios from 'axios';

let url = 'https://fast-food-fast-op.herokuapp.com/api/v2/auth/login';
let headers = { 'Content-type': 'application/json' };
const login = (login_detail) => dispatch => {
    axios.post(url, login_detail, { headers })
        .then(res => {
            if(res.data.status === true){
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    payload: res.data
                });
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.username);
                toast.success('Login Succesful');
            }
            else{
                dispatch({
                    type: LOGIN_ERROR,
                    message: res.data.message
                });
                toast.error(res.data.message);
            }
        }).catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                message: err.response.data.message
            });
            toast.error(err.response.data.message);
        });
};

export  const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
};

export default login;
