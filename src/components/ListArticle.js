import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';



export default class ListArticle extends Component {
    render() {
        return (
            <div>
                <Row className="mb-2"> 
                    <Col lg="4" ><img src={this.props.urlLink} style={{ width:100, height:100}}rounded/></Col>
                    <Col lg ="8"><p style={{marginBottom:5}}><strong>{this.props.title}</strong> </p> <br/>
                                <p style={{marginBottom:0, fontSize:13}}>{this.props.author}</p>
                                <p style={{fontSize:13}} ><a>{this.props.info}</a></p>
                    </Col>          
                </Row>
            </div>

        )
    }
}

