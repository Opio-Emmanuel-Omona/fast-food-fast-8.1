import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import signup from '../../actions/signup';

// RegExp from code life: https://github.com/MyNameIsURL/react-form-validation-tutorial/blob/master/src/App.js
const emailRegExp = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

export class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirm: null,
      phone: null,
      userName: null,
      email: null,
      password: null,
      formErrors: {
        userName: "",
        phone: "",
        confirm: "",
        email: "",
        password: "",
        confirm: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      const { history, signupStatus } = nextProps;
      if(signupStatus === true) {
          history.push('/login');
      }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (formValid(this.state)) {
      var signup_detail = {
        email: this.state.email,
        username: this.state.userName,
        password: this.state.password,
        confirm: this.state.confirm,
        phone_no: this.state.phone
      };

      this.props.signup(signup_detail);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    let formErrors = this.state.formErrors;

    switch (name) {
      case "phone":
        formErrors.phone =
          value.length != 12 ? "Invalid phone number" : "";
        break;
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "confirm":
        formErrors.confirm =
          value != this.state.password ? "Passwords don't match" : "";
        break;
      case "email":
        formErrors.email = emailRegExp.test(value) ? "" : "Invalid email";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      [name]: value
    });
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div id="signupForm" className="container">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form className="flow-text" onSubmit={this.handleSubmit} noValidate>
              <div className="userName">
                <label htmlFor="userName">Username</label>
                <input
                  id="signupUsernameInput"
                  type="text"
                  className={formErrors.userName.length > 0 ? "error" : null}
                  placeholder="Username"
                  name="userName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.userName.length > 0 && (
                  <span className="red-text">{formErrors.userName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  id="signupEmailInput"
                  type="text"
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="example@domain.com"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="red-text">{formErrors.email}</span>
                )}
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone No</label>
                <input
                  id="signupPhoneInput"
                  type="number"
                  className={formErrors.phone.length > 0 ? "error" : null}
                  placeholder="+256773480077"
                  name="phone"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.phone.length > 0 && (
                  <span className="red-text">{formErrors.phone}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  id="signupPasswordInput"
                  type="password"
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="********"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="red-text">{formErrors.password}</span>
                )}
              </div>
              <div className="confirm">
                <label htmlFor="confirm">Confirm Password</label>
                <input
                id="signupConfirmInput"
                  type="password"
                  className={formErrors.confirm.length > 0 ? "error" : null}
                  placeholder="********"
                  name="confirm"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.confirm.length > 0 && (
                  <span className="red-text">{formErrors.confirm}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <NavLink to="/login">
                  <p>
                    <small>Already Have Account?</small>
                  </p>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  signupStatus: state.signupReducer.signupStatus
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
