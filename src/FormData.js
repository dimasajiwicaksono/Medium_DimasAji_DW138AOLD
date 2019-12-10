import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';


export default class FormData extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: '',
            email: '',
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
            })
        } else {
            this.setState({
                name: '',
                email: '',
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
                        <label>Your Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Your Password</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <Button style={{marginLeft:"320px"}} variant="dark" type="submit" className="btn-continue">Continue</Button>
                    <br/><br/>
                    <p style={{color:"green", textAlign:"center"}}> <b><a href="#">All sign in options</a></b> </p>
                </Form>
            </div>
        )
    }
}