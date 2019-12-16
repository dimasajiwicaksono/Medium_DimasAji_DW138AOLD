import React, { Component } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faAngleDown, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



export default class CommentBoxAdd extends Component {
    render() {
        return (
            <Container>
                    <div className="container-comment" style={{ flexDirection: "column", display: "flex", alignItems: "center", marginBottom:"40px" }}>
                        <Card variant="light" text="dark">
                            <Card.Body style={{ width: "750px" }}>
                            <div className="flex-direction-coloumn" style={{ flexDirection: "coloumn" }} >
                                <div className="Row" style={{display:"flex"}} inline>
                                    <div className="image">
                                        <img src={this.props.img} style={{ borderRadius: "50%" }} />
                                    </div>
                                    <div className="name">
                                        <Col style={{color:"green"}}><strong>{this.props.author}</strong> </Col>
                                        <Col > {this.props.date}</Col>
                                    </div>
                                </div>
                            <div className="comment-text comment-icon">
                                <p>{this.props.comment}</p>
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
                </Container>
        )
    }
}