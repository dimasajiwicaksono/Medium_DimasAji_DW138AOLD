import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


export default class FooterArticle extends Component {
    render() {
        return (
            <div className="fluid">
                <Card>
                    <Card.Body className="image" style={{ padding: 0 }}>
                        <Card.Img src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" />
                        <div ClassName="TextBox">
                            <div className="TextTitle">
                                <p style={{ fontSize: "2em" }}> Have Indoensia GOld medal in Sea Games 2019?</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Row >
                    <Col md={2} style={{ paddingTop: "5px" }} >
                        <img src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                    </Col>
                    <Col md={8} style={{ fontSize: "1em", padding: "0px" }}>
                        <p style={{ marginBottom: "0px" }}>Dimas Aji Wickaono</p>
                        <p>Jan 24, 2018 . 4 min read</p>
                    </Col>
                    <Col md={2} style={{ marginTop: "10px" }}>
                        <span> <BookmarkBorderIcon /> </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
