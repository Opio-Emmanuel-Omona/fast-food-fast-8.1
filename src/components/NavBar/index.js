import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';


export class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: null
        }
    }

    componentWillReceiveProps(nextProps) {
        const { loginStatus } = nextProps;
        if(loginStatus === true) {
            this.setState({
                loggedIn: true,
                username: localStorage.getItem('username')
            })
        }
    }

    render() {
        return (
            <nav id="navbar" className="nav-wrapper darken-3">
                <div className="container">
                    <a className="brand-logo">Fast Food Fast</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        { this.state.username ? <div>{this.state.username} <a onClick={localStorage.clear()}>Logout</a> </div> : <span>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Signup</NavLink></li> 
                        </span>} 
                    </ul>
                </div>
            </nav>
        )
    }
}

export const mapStateToProps = state => ({
    loginStatus: state.loginReducer.loginStatus
});

export default connect(mapStateToProps)(Navbar)