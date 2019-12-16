import React, { Component } from 'react';
import {Container, Col, Image,Row, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/fontawesome-free';

export default class FollowColoumn2 extends Component {
    render() {
        return (
            <Container>
                <div className="followComponent">
                    <Row className ="info">
                        <Col md={10} className="infoAuthor">
                            <Row className="name">
                                <h1>Ryan Holliday</h1>
                                <Button variant ="outline-success" style={{margin:"10px", paddingTop:0, paddingBottom  :0}}>Follow</Button>
                            </Row>
                            <Row className="description">
                                <h5>Bestselling autoir in the wowe lorem ipsum dolor set amet doloe alkadlklakdlkladklkaldk</h5>
                            </Row>
                            <Row className="icon" style={{marginTop:"20px", paddingLeft:0}}>
                                <Col className="following">
                                    <h6> 246 Following </h6>
                                </Col>
                                <Col className="follower">
                                    <h6> 100k Follower </h6>
                                </Col>
                                <Col className="icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="image">
                            <Image src ="https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png" style={{width:"100px", height:"100px", borderRadius:"50%"}} />
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
