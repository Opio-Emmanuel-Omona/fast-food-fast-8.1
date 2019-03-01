import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Navbar'
import Home from '../Home';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Route exact path='/' component={Home}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
