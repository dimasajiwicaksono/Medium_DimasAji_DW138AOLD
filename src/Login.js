import React from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './App.css';


function LogIn(props) {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-hcenter"
        centered
        >
        
        <Modal.Body>
        <div className = "containerLog">
        <div className= "text">
        <p style={{fontSize:"30px", textAlign:"center",fontFamily:"Times New Roman"}}><b>Sign in with email </b></p>
        <p style={{textAlign:"center", color:"grey", fontSize:"12px"}}>
            Enter the email address with your account,<br/>
            and we'll send a magic link to your inbox</p>
        </div>
        
        <Form>
        <div className="form-groupLog">
            <input type="username" className="form-control" placeholder="Your Username"required/>
        </div>
        <div className="form-groupLog">
            <input type="password" className="form-control" placeholder="Your Password" required/>
        </div>
        <div className="form-groupLog" >
            <Button variant ="dark" type="Submit"color="black" textAlign="center">Continue</Button>
            </div>
        <br/><br/><br></br>
            <p style={{textAlign:"center"}}> <b><font color="green"><a href ="#">All Sign in options</a></font></b></p>
                
        </Form>
        </div>
        </Modal.Body>
    </Modal>

    );
}

function App () {

    const [modalShow, setModalShow] = React.useState(false);

    return (
    <ButtonToolbar>
        <Button variant="success" onClick={() => setModalShow(true)}>
        Login
        </Button>

        <LogIn
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="lg"
        aria-labelledby="example-custom-modal-styling-title"
        />
    </ButtonToolbar>
    );
}

export default App;