import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';



export default class ListArticle extends Component {
    render() {
        return (
            <div>
                <Row xs lg={4} className="mediumAwalkolom">
                    <Col xs lg={2} className="number" style={{
                        fontSize: "30px",
                        color: "grey", textAlign: "right"
                    }}> {this.props.num}
                    </Col>

                    <Col xs lg={10} className="medium AwalKonten" >
                        <p ><b>{this.props.title}</b><br/></p>
                        <p style={{ fontSize: 14, marginBottom:0 }}>{this.props.author} </p>
                        <p style={{ fontSize: 14}}>{this.props.info} <br /></p>
                    </Col>
                </Row>
            </div>

        )
    }
}