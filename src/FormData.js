import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


export default class FormData extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
        }
    }

    // Form Events
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeName(e) {
        this.setState({ password: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        this.setState({
            email: '',
            password: '',
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email,
                password: this.userData.password,
            })
        } else {
            this.setState({
                email: '',
                password: '',
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                <Form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Your Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Your Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangeName} />
                    </div>
                    <Button variant="dark" type="submit" className="btn-continue">Continue</Button>
                    <br/><br/>
                    <p style={{color:"green", textAlign:"center"}}> <b><a href="#">All sign in options</a></b> </p>
                </Form>
            </div>
        )
    }
}