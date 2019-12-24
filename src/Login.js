import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './App.css';
import FormData from './FormData';
import { Link } from 'react-router-dom';



export default class Login extends Component {

    render() {
        return (
            <Container>
            <div className="flex-row justify-content-center">
                <p style={{ fontSize: "30px", textAlign: "center", fontFamily: "Times New Roman" }}><b>Sign in with email </b></p>
                <p style={{ textAlign: "center", color: "grey", fontSize: "20px" }}>
                    Enter the email address with your account,<br />
                    and we'll send a magic link to your inbox</p>
                <FormData />
            <p style={{ color: "green", textAlign: "center" }}> <b><a href="#">All sign in options</a></b> </p>
            </div >
            </Container>
        )
    }
}

