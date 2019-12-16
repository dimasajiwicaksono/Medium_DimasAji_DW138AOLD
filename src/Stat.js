import React, { Component } from 'react';
import Header from './Header';
import { Container, Nav, Row, Col, Tab} from 'react-bootstrap';

export default class Stat extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <div className="header" style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <h1>Stats</h1>
                    <div className="row" inline>
                        <h6 className="col-9">Click story below to view in chart</h6>
                        <h6 className="col-3-end">Learn more about using tabs</h6>
                    </div>
                </div>
                <Tab.Container>
                <Nav variant="tabs" defaultActiveKey="#1" className="tabs-nav">
                    <Nav.Item className="col-4">
                        <Nav.Link href="#1" style={{ fontSize: "2em" }}><strong>0</strong> <br /> Views (30 days)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-4">
                        <Nav.Link href="#2" style={{ fontSize: "2em" }}><strong>0</strong> <br /> Read (30 days)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-4">
                        <Nav.Link href="#3" style={{ fontSize: "2em" }}><strong>0</strong> <br /> Fans (30 days)</Nav.Link>
                    </Nav.Item>
                        <Tab.Content>
                            <Tab.Pane eventKey="#1">
                                <h1> ini merupakan halaman Views</h1>
                                <h1> ini merupakan halaman Views</h1>
                                <h1> ini merupakan halaman Views</h1>
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey="#2">
                                <h1> ini merupakan halaman Read</h1>
                                <h1> ini merupakan halaman Read</h1>
                                <h1> ini merupakan halaman Read</h1>
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey="#3">
                                <h1> ini merupakan halaman Fans</h1>
                                <h1> ini merupakan halaman Fans</h1>
                                <h1> ini merupakan halaman Fans</h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </Nav>
                </Tab.Container>
                <Nav variant="tabs" className="tabs-date" style={{placeContent:"center", textAlign:"center", marginBottom:40}}>
                <Nav.Item className="col-3">
                        <Nav.Link href="#2" style={{ fontSize: "1em", padding:0 }}><strong></strong> <br /> Previsous (30 Days)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-3">
                        <Nav.Link href="#3" style={{ fontSize: "1em", padding:0 }}><strong></strong> <br /> Next (30 days)</Nav.Link>
                    </Nav.Item>

                </Nav>
                <h6 style={{textAlign:"center"}}>There are no published stories for which you can view stats.</h6>
            </Container>

        )
    }
}
