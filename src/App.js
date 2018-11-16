import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {Projects} from './Projects'
import {HomePage} from './HomePage'
import {About} from './About'


class App extends Component {
  render() {
    return (<div>
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route exact path="/" component={HomePage}/>
                </div>
            </Router>
        </div>
        );
  }
}

export default App