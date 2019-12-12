import React, { Component } from 'react';
import Header from './Header';
import MissionHeader from './components/MissionHeader';
import {Container, Navbar} from 'react-bootstrap';
import './App.css';
import Follow from './components/Follow';



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
            </Container>
            
        )
    }
}
