import React, { Component } from 'react';
import {Row, Col, Button, Image} from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export default class FollowColoumn extends Component {
    render() {
        return (
            <div className="FollowColoumn">
                <div className="contentFollowColoumn">
                    <Row className="follow">
                        <Col xs={2} className="avatar"><Image src ="https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png" style={{width:"100px", height:"100px", borderRadius:"50%"}} /></Col>
                        <Col className="a">
                            <Row className='b'>
                                <Col className="c" >
                                    <Row className="d" style={{paddingTop:"10px"}}>
                                        <Col xs={2} className="e" style={{width:"200px", paddingRight:"0px"}}>
                                        <div className="followButton" > 
                                            <p style={{fontSize:"13px", marginBottom:0}}><strong>Ryan Holliday</strong></p>
                                            </div>
                                        </Col>
                                        <Col xs={2} style={{paddingleft:0}}>
                                            <div className="followButton">
                                                <Button variant="outline-success" style={{paddingTop:1, paddingBottom:1}}>Follow</Button> 
                                            </div>
                                        </Col>
                                    </Row>
                                    <p style={{fontSize:"100%"}}>Jan 23, 2017 . 5 min read </p>
                                </Col>
                            </Row>
                        </Col>
                            <Row inline style={{height:30, paddingTop:30, marginTop:20}}>
                                <span><a href="#"> <TwitterIcon /> </a> </span>
                                <span> <LinkedInIcon /> </span>
                                <span> <FacebookIcon /> </span>
                                <span> <BookmarkBorderIcon /> </span>
                            </Row>
                    </Row>
                </div>
            </div>
        )
    }
}
