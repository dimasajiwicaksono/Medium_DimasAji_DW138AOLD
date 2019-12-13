import React, {Component} from 'react';
import {Col,Row} from 'react-bootstrap';




export default class FooterArticleBanner extends Component {
    render () {
        return (
            <div className="container-fluid">
                <Row clasName="footer-col-md-4" style={{background:"black", color:"white", padding:"15px", marginTop:"30px"}}>
                    <Col xs md ={4}> 
                        <h4> Discover Medium </h4>
                        <p style={{fontSize:"14px"}}>Wellcome to a place whre words matter. On Medium, samrat voices
                        and original ideas take center stange with no ads insight <a href="#">Watch</a></p> 
                    </Col>
                    <Col xs md ={4}> 
                        <h4>Make Maedium yours</h4>
                        <p style={{fontSize:"14px"}}>Follow all the topics you care about and we'll deliver the best stroies for you to your homepage
                            and inbox <a href="#">Explore</a></p>
                    </Col>
                    <Col xs md ={4}> 
                        <h4>Become Member</h4>
                        <p style={{fontSize:"14px"}}> Get Unlimeted access to the besat stories on Medium aand support writers while you're at import PropTypes from 'prop-types'
                        <a href ="#">Upgrade</a></p>
                    </Col>

                </Row>
                <Row style={{background:"black", marginBottom:"30px", paddingBottom:"40px"}}>
                    <Col xs md={9} className="medium" style={{fontSize:"20px", color:"white"}}> Medium</Col>
                    <Col xs md={3} className="link-list">
                        <Row className="justify-content-center" style={{paddingBottom:"10px", color:"white"}}>
                            <span> <Col>About</Col></span>
                            <span> <Col>Help</Col></span>
                            <span> <Col>Legal</Col></span>
                        </Row>
                    </Col>
                </Row>
            </div>



        )
    }
}