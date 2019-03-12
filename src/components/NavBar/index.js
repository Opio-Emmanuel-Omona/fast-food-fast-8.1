import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/login';


export class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: null
        };
    }

    componentWillReceiveProps(nextProps) {
        const { loginStatus } = nextProps;
        if(loginStatus === true) {
            this.setState({
                loggedIn: true,
                username: nextProps.username
            });
        }
    }

    clear = (e) => {
        localStorage.clear();
        this.setState({
            loggedIn: false,
            username: ''
        });
        this.props.logout();
    }

    render() {
        return (
            <nav id="navbar" className="nav-wrapper darken-3">
                <div className="container">
                    <a className="brand-logo"><NavLink to="/">Fast Food Fast</NavLink></a>
                    <ul className="right">
                        { this.props.username ?<li> <li><NavLink to="">{this.props.username}</NavLink> </li > <li onClick={this.clear} >Logout</li></li>: <span>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Signup</NavLink></li> 
                        </span>} 
                    </ul>
                </div>
            </nav>
        );
    }
}

export const mapStateToProps = state => ({
    loginStatus: state.loginReducer.loginStatus,
    username: state.loginReducer.username
});

export default connect(mapStateToProps, { logout })(Navbar);