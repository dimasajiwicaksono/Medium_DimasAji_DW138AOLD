import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default class ListArticleBig extends Component {
    render() {
        return (
            <div>
                <Row className="mb-3"> 
                    <Col ><img src={this.props.urlLink} style={{ width:300, height:150}}rounded/>
                            <p ><strong><Link to ='/article_detail'>{this.props.title}</Link></strong> </p> <br/>
                            <p style={{marginTop:-30, fontSize:16}}><a>{this.props.subTitle}</a></p>
                            <p style={{fontSize:13, marginBottom:0}}>{this.props.author}</p>
                            <p style={{fontSize:13}}>{this.props.info}</p>
                    </Col>          
                </Row>
            </div>

        )
    }
}