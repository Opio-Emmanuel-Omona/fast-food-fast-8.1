import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../NavBar'
import Home from '../Home';
import Signup from '../Signup';
import Footer from '../Footer';
import Login from '../Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/signup' component={Signup}/>
                        <Route exact path='/login' component={Login}/>
                    </div>
                    {/* <Footer /> */}
                    <ToastContainer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
