import { LOGIN_SUCCESSFUL } from '../types';
import { toast } from 'react-toastify';
import axios from 'axios';

let url = 'https://fast-food-fast-op.herokuapp.com/api/v2/auth/login';
let headers = { 'Content-type': 'application/json' };
const login = (login_detail) => dispatch => {
    axios.post(url, login_detail, { headers })
        .then(res => {
            if(res.status){
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    payload: res.data
                });
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.username);
                toast.success('Login Succesful');
            }
            else{
                toast.error(res.data.message);
            }
        }).catch(err => {
            console.log(err);
        });
};

export default login;
