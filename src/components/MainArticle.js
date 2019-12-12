import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './../App.css';



export default class MainArticle extends Component {
    render() {
        return (
            <div className="MainContent" style={{marginTop:20}}>
                <Row className="contentLeft1">
                    <Col className="textContent">
                        <p1>{this.props.superTitle}</p1> <br />
                        <p2 style={{ fontSize: "20px"}}><b><Link to ={this.props.url}>{this.props.title}</Link></b> </p2><br/>
                        <p style={{ fontSize:16, marginTop:10, marginBottom:10 }}>{this.props.subTitle}</p>
                        <p style={{fontSize:14, marginBottom:0}}>{this.props.author}</p>
                        <p style={{ fontSize: "14px", color:"grey" }}>{this.props.info} <br /></p>
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