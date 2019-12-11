import React, {Component} from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';



export default class Category extends Component {
    render () {
    return (
        <Navbar bg="light" style={{paddingRight:"2px", paddingLeft:"2px", marginTop:"0px"}}>
            <Nav.Link style ={{height:"60px" }} href ="#home">{this.props.name}</Nav.Link>
        </Navbar>
    )
}
}