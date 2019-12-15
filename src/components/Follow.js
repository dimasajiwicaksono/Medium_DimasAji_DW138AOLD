import React, {Component} from 'react';
import {Button, OverlayTrigger, Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Comment from './../components/Comment';


export default class Follow extends Component {
    render () {
        return (
            <Container>
                 <div className="btn" style={{marginLeft:120}}>
                    <span><Button variant="light">Books </Button></span>
                    <span><Button variant="light">Self Improvement </Button></span>
                    <span><Button variant="light">Productivity </Button></span>
                    <span><Button variant="light">Life </Button></span>
                    <span><Button variant="light">Life Lesson </Button></span>

                    
                </div>
            
            <div className="FollowColoumn" style={{paddingLeft:"190px"}}>
                <div className="contentFollowColoumn">
                    <Row className="follow">
                        <Col xs={2} className="avatar"><Image src ="https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png" style={{width:"100px", height:"100px", borderRadius:"50%"}} /></Col>
                        <Col className="a">
                            <Row className='b'>
                                <Col className="c" >
                                <p style={{marginBottom:0}}> WRITTEN BY </p>
                                    <Row className="d">
                                        <Col xs={8} className="e" style={{width:"200px", paddingRight:"0px"}}>
                                        <div className="followButton" >
                                            <p style={{fontSize:"20px", marginBottom:0}}><strong>Ryan Holliday</strong></p>
                                            </div>
                                        </Col>
                                        <Col xs={4} style={{paddingleft:0}}>
                                            <div className="followButton">
                                                <Button variant="outline-success" style={{paddingTop:1, paddingBottom:1}}>Follow</Button> 
                                            </div>
                                        </Col>
                                    </Row>
                                    <p style={{fontSize:"100%"}}>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’<br/>
                                                                 & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            
            <br /><br />


        <div className="FollowColoumn" style={{paddingLeft:"190px"}}>
        <div className="contentFollowColoumn">
            <Row className="follow">
                <Col xs={2} className="avatar"><Image src ="https://miro.medium.com/fit/c/160/160/1*kFWwYehzjJIhgw8hTygfHw.png" style={{width:"100px", height:"100px", borderRadius:"50%"}} /></Col>
                <Col className="a">
                    <Row className='b'>
                        <Col className="c" >
                        {/* <p style={{marginBottom:0}}> WRITTEN BY </p> */}
                            <Row className="d">
                                
                                <Col xs={8} className="e" style={{width:"200px", paddingRight:"0px"}}>
                                <div className="followButton" >
                                    <p style={{fontSize:"20px", marginBottom:0}}><strong>Mission.Org</strong></p>
                                    </div>
                                </Col>
                                <Col xs={4} style={{paddingleft:0}}>
                                    <div className="followButton">
                                        <Button variant="outline-success" style={{paddingTop:1, paddingBottom:1}}>Follow</Button> 
                                    </div>
                                </Col>
                            </Row>
                            <p style={{fontSize:"100%"}}>A network of business & tech podcasts designed to <br/>
                                                        accelerate learning. Selected as Best of 2018 by Apple.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </div>
            <hr />

        <div style={{paddingLeft:"350px", paddingBottom:"100px"}}>
           <Link to="/Comment"> <Button variant="outline-success" style={{width:"500px"}}> See responses (2)</Button> </Link>
        </div>


        </Container> 


        )
    }
}