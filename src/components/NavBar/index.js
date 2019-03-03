import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


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
                username: localStorage.getItem('username')
            });
        }
    }

    clear(e){
        localStorage.clear();
        this.setState({
            loggedIn: false,
            username: localStorage.getItem('username')
        });
    }

    render() {
        return (
            <nav id="navbar" className="nav-wrapper darken-3">
                <div className="container">
                    <a className="brand-logo">Fast Food Fast</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        { this.state.username ?<li> <li><NavLink to="">{localStorage.getItem('username')}</NavLink> </li> <li><NavLink to='/login' onClick={this.clear.bind(this)} >Logout</NavLink></li> </li>: <span>
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

export default connect(mapStateToProps)(Navbar);