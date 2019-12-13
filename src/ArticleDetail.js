import React, { Component } from 'react';
import Header from './Header';
import MissionHeader from './components/MissionHeader';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Follow from './components/Follow';
import FooterArticle from './components/FooterArticle';
import FooterArticleBanner from './components/FooterArticleBanner';


export default class ArticleDetail extends Component {
    render() {
        return (
            <Container className="Container">
                <div className="topHeader">
                    <Header />
                    <MissionHeader />
                </div>
                <div>
                    <Follow />
                </div>
                <div className="fluid">
                    <Row classNAme="justify-content-center">
                        <Col xs md={4}> <FooterArticle /></Col>
                        <Col xs md={4}> <FooterArticle /></Col>
                        <Col xs md={4}> <FooterArticle /></Col>
                    </Row>
                </div>
                <div className="container-fluid">
                    <FooterArticleBanner />

                </div>
            </Container>
        )
    }
}
