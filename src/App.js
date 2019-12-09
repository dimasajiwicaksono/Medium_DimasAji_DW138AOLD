import React from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './App.css';



function MyModal(props) {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-hcenter"
        centered
        >
        
        <Modal.Body>
        <img src ="https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png" align="left" />
        <img src ="https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png" align="right"/>

        <div className = "container">
        <div className= "text">
        <p style={{fontSize:"20px", textAlign:"center"}}><b>Join Medium.</b></p>
        <p style={{textAlign:"center", color:"grey", fontSize:"12px"}}>
            Create an account to recieve an great stories in your inbox,<br/>
            personalize your homepage and follow authors and <br/>
            topics that you love</p>
        </div>
        
        <Form>
        <div className="form-group">
            <label>Your Username</label>
                    <input type="username" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Your Password </label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group" >
                    <Button variant ="dark" type="Submit"color="black" textAlign="center">Registration</Button>
                </div>
                <br></br>

    
                <p style={{textAlign:"center"}}> <b>Already have an account ? <font color="green"><a href ="#">Sign In</a></font></b></p>
                <p style={{textAlign:"center",fontSize:"14px"}}> To make medium work, we log user data and share it <br/>
                    with service providers. Click "Sign Up" above to accept <br/>
                    Medium's Term of Service & Privacy Policy. </p> 
        </Form>
        </div>
        </Modal.Body>
    </Modal>

    );
}

function App () {

    const [modalShow, setModalShow] = React.useState(false);

    return (
    <ButtonToolbar className="btn-registration">
        <Button variant="success" onClick={() => setModalShow(true)}>
        Registration
        </Button>

        <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="lg"
        aria-labelledby="example-custom-modal-styling-title"
        />
    </ButtonToolbar>
    );
}

export default App;