import React, { Component } from 'react';
import { Row, Col, Card, Container, Button, Image } from 'react-bootstrap';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Moment from 'react-moment';


export default class FooterArticle extends Component {


    render() {
        return (
            <div className='Col-4-md' style={{ maxWidth: 400, margin:10 }}>
                <Card >
                    <Card.Img src={this.props.image} />
                    <Card.Body className="textbox">
                        <Card.Footer style={{fontSize:'1.5em', textJustify:'center'}}>
                            {this.props.titleArticle}
                        </Card.Footer>
                    </Card.Body>
                </Card>
                    <Row style={{paddingTop:20}}>
                        <Col md={2}  >
                            <img src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                        </Col>
                        <Col md={8} style={{ fontSize: "1em", padding: "0px" }}>
                            <p style={{ marginBottom: "0px" }}>{this.props.author}</p>
                            <p><Moment format="MMM D YYYY">{this.infoDate}</Moment></p>
                        </Col>
                        <Col md={2} style={{ marginTop: "10px" }}>
                            <span> <BookmarkBorderIcon /> </span>
                        </Col>
                    </Row>
              </div>



                )
            }
        }
