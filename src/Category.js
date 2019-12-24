import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Category extends Component {

    constructor (props) {
        super (props);
        this.state = {
            categories : [],
        };
    }

    componentDidMount () {
        axios.get ('http://localhost:5000/api/v1/categories')
            .then (res => { 
                // this.setState ({props : params})
                this.setState ({categories:res.data})  
            })
            console.log(this.state);
    }

    render () {
        console.log ('sdah masuk')
        return (
            <Container style={{paddingTop:0}}>
                <Nav >
                {this.state.categories.map ( (categories, idx) => (
                    <Nav.Link key ={categories.id} ><Link to = '/category_page' style={{textDecoration:"none"}}>{categories.name}</Link></Nav.Link>
                        ))}
                </Nav>
            </Container>
        )
    }
}