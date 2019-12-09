import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './form.css';
//import {Modal} from 'react-bootstrap';





export default class FormData extends Component {

// Store React form state in local storage with life cycle

UserData; // store form's value in LOcal Strorage

constructor (props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);


    this.state = {
        username:'',
        password:'',

    }
} 


// Form event 
    onChangeName(e) { 
        this.setState ({name:e.target.value})
}

    onChangePassword(e) {
        this.setState({password:e.target.value})
    }

/* onSubmit triggers before the rendering happens. 
We are setting up form state in local storage. */

    onSubmit (e) {
        e.preventDefault ()
        this.setState({
            name:'',
            password:'',
        })
    }

// React life Cycle
/*defining the state, so we are 
setting up the form data in the userD ata variable and 
checking if the localStorage exists then 
setting up the form state via local storage.*/


componentDidMount () {
    this.userData = JSON.parse (localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
        this.setState({
            name:this.userData.name,
            password:this.userData.password
        })
    } else {
        this.setState ({
            nama:'',
            password:'',
        })
    }
}


// component will update

/*componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('login', JSON.stringfy(nextState));*/




    render() {
        return (   
            <div className = "containerLog">
            <div className= "text">
                <p style={{fontSize:"30px", textAlign:"center",fontFamily:"Times New Roman"}}><b>Sign in with email </b></p>
                <p style={{textAlign:"center", color:"grey", fontSize:"20px"}}>
                        Enter the email address with your account,<br/>
                        and we'll send a magic link to your inbox</p>
            </div>
        
        <Form onSubmit={this.onSubmit}>
            <div className="form-groupLog">
                <label>Your Username</label>
                <input type="username" className="form-control" value={this.state.name} onChange={this.onChangeName} required/>
            </div>
            <div className="form-groupLog">
                <label>Your Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required/>
            </div>
            <div className="form-groupLog" >
        <Button variant ="dark" type="Submit"color="black" textAlign="center">Continue</Button>
            </div>
            <br/><br/>
                <p style={{textAlign:"center"}}> <b><font color="green"><a href ="#">All Sign in options</a></font></b></p>
        </Form>
        </div>
        );
}
}