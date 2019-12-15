import React, { Component } from 'react';
import {Container, Button} from 'react-bootstrap';
import Header from './Header';

export default class Story extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <div className="row" style={{marginTop:"50px"}}>
                    <div className="col-8">
                        <h1 className="col-8">Your Stories</h1>
                    </div>
                    <div className="col-4">
                        <Button className="import" variant="outline-dark" style={{marginRight:"10px"}}>Import a story</Button>
                        <Button className="write" variant="outline-success">Write a story</Button>
                    </div>  
                </div>
            </Container>
            
        )
    }
}
