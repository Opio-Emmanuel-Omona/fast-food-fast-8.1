import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import login from '../../actions/login';
import { toast } from 'react-toastify';
import Loader from '../Loader';


const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
    return valid;
};

export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            loading: false,
            formErrors: {
                username: '',
                password: ''
            } 
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: false
        });
        const { history, loginStatus } = nextProps;
        if(loginStatus === true && localStorage.getItem('username') === this.state.username) {
            history.push('/');
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (formValid(this.state)) {
            let login_detail = {
                username: this.state.username,
                password: this.state.password
            };

            this.setState({
                loading: true
            });
            
            this.props.login(login_detail);
            
        }
        else {
            toast.error('Cannot submit form with errors');
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case 'username':
                formErrors.username = value.length < 3 ? 'minimum 3 characters required' : '';
                break;
            case 'password':
                formErrors.password = value.length < 6 ? 'minimum 6 characters required' : '';
                break;
            default:
                break;
        }

        this.setState({
            formErrors, [name]: value
        });
    };

    render() {
        const { formErrors } = this.state;
        return <div id="loginForm" className="container wrap">
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Login</h1>
                    {this.state.loading ? <Loader />: ''}
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input id="loginUsernameInput" type="text" className={formErrors.username.length > 0 ? 'error': null} placeholder="username" name="username" noValidate onChange={this.handleChange} />
                            {formErrors.username.length > 0 && (<span className="red-text">{formErrors.username}</span>)}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input id="loginPasswordInput" type="password" className={formErrors.password.length > 0 ? 'error': null} placeholder="********" name="password" noValidate onChange={this.handleChange} />
                            {formErrors.password.length > 0 && (<span className="red-text">{formErrors.password}</span>)}
                        </div>
                        <div className="login">
                            <input type="submit" value="Login" className="btn btn-primary"  disabled={this.state.loading}/>
                            <NavLink to='signup'><p><small className="label">Don't Have Account?</small></p></NavLink>
                        </div>
                    </form>
                </div>
            </div>     
        </div>;
    }
}

export const mapStateToProps = state => ({
    loginStatus: state.loginReducer.loginStatus,
    message: state.loginReducer.message
});
  
export default connect(
    mapStateToProps,
    { login }
)(Login);
