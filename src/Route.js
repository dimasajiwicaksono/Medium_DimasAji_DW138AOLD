import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Home from './Home';




export default class Route extends Component {
    render () {
        return (
            <div>
                <NavLink to="/Home">Home</NavLink>

            </div>
        )
    }
} 