import React, { Component } from 'react';
import Login from './Login';
import App from './App';
import {Navbar, Nav} from 'react-bootstrap';

export default class Head extends Component {
    render() {
        return (
            <div>
                <Navbar bg ="light" style={{marginLeft:1000}}>
                    <Nav className="Login"> 
                        <Login />
                    </Nav>
                    <Nav className="registration" style={{marginRight:20, marginLeft:20}}>   
                        <App />
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
