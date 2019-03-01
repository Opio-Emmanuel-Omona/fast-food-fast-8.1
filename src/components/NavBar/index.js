import React from 'react'
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav-wrapper darken-3">
                <div className="container">
                    <a className="brand-logo">Fast Food Fast</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar