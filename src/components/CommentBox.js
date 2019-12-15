import React, { Component } from 'react';
import {Container, Row, Col, Card, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark, faAngleDown, faHandPaper} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
// import Bookmark from './Bookmark';
// import Clap from './clapping.png';



export default class CommentBox extends Component {
    render() {
        return (
            <Container className="container-md">
                <div className="container-comment" style={{ flexDirection: "column", display: "flex", alignItems: "center", marginBottom:"40px" }}>
                <p className="justify-center"><strong>Responses </strong></p>
                    <Form style={{width:"750px"}}>
                        <Form.Group controlId="Form.ControlTextarea" style={{marginLeft:"0",width:"750px"}}>
                            <Form.Control as="textarea" placeholder="Write responses..." />
                        </Form.Group>
                    </Form>
                <div className="container-comment" style={{ flexDirection: "column", display: "flex", alignItems: "center", marginBottom:"40px" }}>
                    <Card variant="light" text="dark">
                        <Card.Body style={{ width: "750px" }}>
                        <div className="flex-direction-coloumn" style={{ flexDirection: "coloumn" }} >
                            <div className="Row" style={{display:"flex"}} inline>
                                <div className="image">
                                    <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*BtYbqp0aAHnQ0s0XG7h1uQ@2x.jpeg" style={{ borderRadius: "50%" }} />
                                </div>
                                <div className="name">
                                    <Col style={{color:"green"}}><strong>Dimas Aji</strong> </Col>
                                    <Col>12 Jan</Col>
                                </div>
                            </div>
                        <div className="comment-text comment-icon">
                            <p>Woooo its awesome. cant u teach me or send me email</p>
                        </div>
                        <div className="row">
                            <div className="col-1 clap">
                                <FontAwesomeIcon icon={faHandPaper} style={{marginRight:"10px"}}/>
                            </div>
                                <p> 24 </p>
                            <div className="col-10 icon" style={{textAlign:"end"}}>
                                <Link to='./Bookmark'><FontAwesomeIcon icon={faBookmark} style={{marginRight:"10px"}}/></Link>  
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="container-comment" style={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
                    <Card variant="light" text="dark">
                        <Card.Body style={{ width: "750px" }}>
                        <div className="flex-direction-coloumn" style={{ flexDirection: "coloumn" }} >
                            <div className="Row" style={{display:"flex"}} inline>
                                <div className="image">
                                    <img src="https://cdn-images-1.medium.com/fit/c/36/36/1*BtYbqp0aAHnQ0s0XG7h1uQ@2x.jpeg" style={{ borderRadius: "50%" }} />
                                </div>
                                <div className="name">
                                    <Col style={{color:"green"}}><strong>Dimas Aji</strong> </Col>
                                    <Col>12 Jan</Col>
                                </div>
                            </div>
                        <div className="comment-text comment-icon">
                            <p>The real reason for plus plus originally was that it made efficient use of the auto 
                                increment addressing modes on the PDP 11. Whether you use prefix or post fix now should be 
                                an issue of expressing what you mean. Worrying about the additional memory usage before you 
                                have even monitor the code is really a perfect 
                                example of Knuth’s “premature optimization is the root of all evil.”</p>
                        </div>
                            <div className="row">
                                <div className="col-1 clap">
                                    <FontAwesomeIcon icon={faHandPaper} style={{marginRight:"10px"}}/>
                                </div>
                                    <p> 24 </p>
                                <div className="col-10 icon" style={{textAlign:"end"}}>
                                    <FontAwesomeIcon icon={faBookmark} style={{marginRight:"10px"}}/>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </Container>
        )
    }
}
