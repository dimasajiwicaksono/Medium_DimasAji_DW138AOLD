import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './../App.css';
import Moment from 'react-moment';



export default class MainArticle extends Component {
    render () {
        return (
            <div className="MainContent" style={{marginTop:20}}>
                <Row className="contentLeft1">
                    <Col className="textContent">
                            <h5> BASED ON HISTORY YOUR READ</h5>
                            <p1 style={{marginTop:"0px"}}>{this.props.superTitle}</p1>
                            <p style={{ fontSize: "20px"}}><b>{this.props.title}</b></p>
                            <p style={{ fontSize:16, marginTop:10, marginBottom:10 }}>{this.props.subTitle}</p>
                            <p style={{fontSize:14, marginBottom:0}}>{this.props.author}</p>
                            <p style={{ fontSize: "14px", color:"grey" }}><Moment format = "MMM D YYYY">{this.props.infoDate}</Moment><br />
                            </p> 
                    </Col>
                    <Col lg={3} className="picture">
                        <center />
                        <img src={this.props.urlLink} style={{ width: 200, height: 150 }} />
                    </Col>
                </Row>
            </div>
        )
    }
}