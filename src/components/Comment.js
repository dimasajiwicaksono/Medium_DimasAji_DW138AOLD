import React, { Component } from 'react';
import Header from './../Header';
import {
    Container
    , Row
    , Col
    , Card
} from 'react-bootstrap';

import CommentBox from './CommentBox';
// import {MDBIcon} from 'mdbreact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
export default class Comment extends Component {
    render() {
        return (
            <Container className="container-md">
                <div>
                    <Header />
                </div>
                
                <div className="container" style={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
                <p className="justify-left"><strong> Showing responses for:</strong></p>
                    <Card variant="light" text="dark">
                        <Card.Body style={{ width: "750px", display:"flex" }} inline>
                            <div className="Row" style={{display:"flex"}} inline>
                                <div className="name" style={{width:"300px"}}>
                                    <Col >Stop using i++ in yours loop </Col>
                                    <Col>dimas aji wicaksono</Col>
                                    
                                </div>
                            </div>
                            <div className="" style={{marginLeft:"300px"}}>
                                    <FontAwesomeIcon icon={faComment} />
                                
                            </div>
                            <p style={{marginLeft:"10px"}}> 216 </p>
                        </Card.Body>
                    </Card>
                </div>
                <hr />
                < div className="commentBox">
                    <CommentBox />
                </div>
            </Container>
        )
    }
}
