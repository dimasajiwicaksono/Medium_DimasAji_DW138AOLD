import React, { Component } from 'react';
import {Container, Button, Image} from 'react-bootstrap';
import Header from './Header';

export default class Profile extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <div className="row" style={{marginTop:"50px", marginBottom:"40px"}}>
                    <div className="col-8">
                        <h1 className="col-8">DIMAS AJI WICAKSONO</h1>
                        <h4 className="col-8">1 Following</h4>
                    </div>
                    <div className="col-2">
                        <Button className="import" variant="outline-dark" style={{marginRight:"10px"}}>Edit Profile</Button>
                    </div>  
                    <div className="col-2">
                        <span><Image src="https://miro.medium.com/fit/c/64/64/1*2bn998LOe7kbY41r0M5Row.jpeg" style={{width:"100%",height:"100%"}} roundedCircle/></span>
                    </div>
                </div>
                <h5> Dimas AJi Wicakasono hasn't been active on Medium yet. Chaeck back later to see their stories. claps and highlight</h5>
            </Container>
            
        )
    }
}
