import React, { Component } from 'react';
import Header from './Header';
import {Container, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

export default class NewStory extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <div className="container">
                    <Form>
                        <Form.Group className="tittle">
                            <Row>
                                <div className="col-3">
                                    <FontAwesomeIcon icon={faPlusCircle} style={{marginRight:"10px", width:"40px", height:"40px"}}/>
                                </div>
                                <div className="col-9">
                                    <Form.Control as="textarea" placeholder="Title"  style={{width:"500px", height:"100px", fontSize:"50px"}}/> 
                                </div>
                            </Row>
                        </Form.Group>
                        <Form.Group className="responses">
                            <Row>
                                <div className="col-3">
                                    <FontAwesomeIcon icon={faPlusCircle} style={{marginRight:"10px", width:"40px", height:"40px"}}/>
                                </div>
                                <div className="col-9">
                                    <Form.Control as="textarea" placeholder="Create your Story"  style={{width:"500px", height:"90px", fontSize:"20px"}}/> 
                                </div>
                            </Row>
                        </Form.Group>
                    </Form>

                </div>
            </Container>
            
        )
    }
}
