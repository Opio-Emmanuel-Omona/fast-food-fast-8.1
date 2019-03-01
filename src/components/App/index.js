import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Navbar'
import Home from '../Home';
import Footer from '../Footer'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Route exact path='/' component={Home}/>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
