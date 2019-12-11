import React from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import './App.css';
import FormData from './FormData';



function LogIn(props) {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-hcenter"
        centered
        >
        
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className = "containerLog">
        <div className= "text">
        <p style={{fontSize:"30px", textAlign:"center",fontFamily:"Times New Roman"}}><b>Sign in with email </b></p>
        <p style={{textAlign:"center", color:"grey", fontSize:"20px"}}>
            Enter the email address with your account,<br/>
            and we'll send a magic link to your inbox</p>
        </div>
            {/* import formdata*/}
            <FormData />

        </div>
        </Modal.Body>
    </Modal>

    );
}

function App () {

    const [modalShow, setModalShow] = React.useState(false);

    return (
    <ButtonToolbar className="login">
        <Button variant="light" text="dark" onClick={() => setModalShow(true)}>
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