import React, { Component } from 'react';
import Header from './Header';
import RelatedArticleMain from './components/RelatedArticleMain';
import FollowColoumn2 from './components/FollowColoumn2';
import {Container, Nav} from 'react-bootstrap';  

export default class RelatedArticle extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <Header />
                </div>
                <div className="contain">
                    <FollowColoumn2 />
                </div>
                <div className ="tab">
                    <Nav variant="tabs" className="tabs-date" style={{textAlign:"center"}} >
                    <Nav.Item >
                            <Nav.Link href="#2" style={{ fontSize: "1em"}}><strong></strong> <br /> Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="#3" style={{ fontSize: "1em"}}><strong></strong> <br /> Claps</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="#4" style={{ fontSize: "1em"}}><strong></strong> <br /> Highlight</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="#5" style={{ fontSize: "1em"}}><strong></strong> <br /> Responses</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </div>
                <div className ="contain">
                    <RelatedArticleMain />
                </div>
            </Container>

        )
    }
}
