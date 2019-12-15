import React, { Component } from 'react';
import Header from './../Header';
import { Card, Container, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';



export default class Bookmark extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <div className="containRow" style={{paddingTop:"40px"}}>
                    <h2><strong>Bookmarks</strong></h2>
                    <Card >
                        <Card.Body inline>
                            <Row>
                                <div className="col-1" >
                                    <FontAwesomeIcon icon={faBookmark} style={{width:"40px", height:"40px"}}/>
                                </div>
                                <div className="col-9">
                                    <h1>Offline Reading is Here</h1>
                                </div>
                                <div className="col-1">
                                    <Button variant="dark">Upgrade </Button>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        )
    }
}
