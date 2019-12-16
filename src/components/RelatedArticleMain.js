import React, { Component } from 'react';
import {Container, Row, Col, Card, CardColumns, Image} from 'react-bootstrap';

export default class RelatedArticleMain extends Component {
    render() {
        return (
            <Container>
                <h3><strong>Featured</strong></h3> 
                <div className="component">
                    <Row className="header">
                        <CardColumns className="row" style={{width:"500px", height:"100px"}}>
                            <CardColumns className="col-6">
                                ini info
                            </CardColumns>
                                <Image src = "https://miro.medium.com/max/1920/1*GyYjPtuJ6BgIg7UJ5Y8yig.jpeg" style={{width:"80%"}}/>
                            <CardColumns className="col-6">
                                ini tulisan
                            </CardColumns>
                        </CardColumns>

                    </Row>
                </div>
            </Container>
            
        )
    }
}
