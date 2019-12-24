import React, { Component } from 'react';
import Header from './Header';
import MissionHeader from './components/MissionHeader';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Follow from './components/Follow';
import FooterArticle from './components/FooterArticle';
import FooterArticleBanner from './components/FooterArticleBanner';
import axios from 'axios';


export default class ArticleDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/v1/article_detail')
            .then(res => {
                this.setState({ articles: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <React.Fragment>
                <div className="topHeader">
                    <Header />
                    <MissionHeader />
                </div>
                <div>
                    <Follow />
                </div>
                <div className="row" inline style={{ marginLeft: "100px" }}>
                    <Row className="justify-content-center">
                        <Row style={{ mergin: 10 }}>
                            {/* <Col md= {4}> */}
                            {this.state.articles.map(item =>
                                <FooterArticle  key ={item.id}
                                    titleArticle={item.title}
                                    image={item.image}
                                    author={item.userId.fullname}
                                />
                            )}
                        </Row>
                    </Row>
                </div>
                <div className="container-fluid">
                    <FooterArticleBanner />

                </div>

            </React.Fragment>
        )
    }
}
