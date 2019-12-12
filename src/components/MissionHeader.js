import React, { Component } from 'react';
import { Container, Navbar, Card, Row, Col, Nav } from 'react-bootstrap';
import FollowColoumn from './FollowColoumn';
import './../App.css';

export default class missionHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Container style={{ paddingTop: "0px", marginTop: "0px" }}>
                    <Navbar style={{ height: "76px" }} bg="light" variant="dark">
                        <Navbar className="medium">
                            <Navbar.Brand href="https://medium.com/the-mission">
                                <img src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png" style={{ width: "250px" }} />
                            </Navbar.Brand>
                        </Navbar>

                        < Navbar className="icon" inline>
                            <div className="text1">
                                <span><a href="#">MISSION ORIGINALS </a>| <a href ="#" >SUBSCRIBE </a> </span>
                            </div>
                        </Navbar>
                    </Navbar>
                </Container>
                <Container>
                    <div className="Banner">
                        <Card className="text-center">
                            <Card.Img src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" style={{ objectFit: "cover" }}></Card.Img>
                            <Card.Text>Books</Card.Text>
                        </Card>
                    </div>
                </Container>

                <Container className="article" style={{ marginLeft: "30px", paddingLeft: "150px", paddingRight: "150px" }}>
                    <div className="article">
                        <div className="articleTitle">
                            <div className="title">
                                <span><h1><strong>If You Only Read A Few Books in 2018, Read These</strong></h1></span>
                                <div className="followComponent">
                                    <Row>
                                        <Col>
                                            <FollowColoumn />
                                        </Col>
                                        <br />
                                    </Row>
                                </div>
                                <p> If you’d liked to be jerked around less,
                                    provoked less, and more productive and inwardly focused,
                                        where should you start?</p><br />
                                <p> To me, the answer is obvious: by turning to wisdom.
                                    Below is a list of 21 books that will help lead you
                                        to a better, stronger 2018. </p><br /><br />
                            </div>
                            <div className="articleText">
                                <p1><strong><a href="http://geni.us/okvZg">Deep Work: Rules for Focused Success in a Distracted World</a> by Cal
                                    Newport</strong> Media consumption went way up in 2017. For most of us,
                                    that meant happiness and productivity went way down. The world is becoming
                                    noisier and will become more so every day. If you can’t cultivate the
                                    ability to have quiet, insightful, deeply focused periods of productive
                                    work, you’re going to get screwed. This is a book that explains how to
                                    cultivate and protect that skill — the ability to do deep work.
                                    I strongly urge you to begin this practice in 2018—
                                    if you want to get anything done or perform your best.</p1><br /><br/>

                                <p2><strong><a href="http://geni.us/yBTi">The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to
                                    Living a Good Life</a> by Mark Manson</strong> To me, practical philosophy has
                                    always been the art knowing what to — and what not to — give a
                                    fuck about. That’s what Mark’s book is about. It’s not about apathy.
                                    It’s about cultivating indifference to things that don’t matter.
                                    Be careful, as Marcus Aurelius warns, not to give the little things
                                    more time and thought they deserved. Maybe looking back at this
                                    year reveals how much effort you’ve frittered away worrying about
                                    the trivial. If so, let 2018 be a year that you only devote energy
                                    to things that truly matter —
                                    get the important things right by ignoring the insignificant.</p2> <br /><br/>

                                <p3> <strong><a href="http://geni.us/yBTi">The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to
                                    Living a Good Life</a> by Mark Manson</strong>To me, practical philosophy has
                                    always been the art knowing what to — and what not to — give a
                                    fuck about. That’s what Mark’s book is about. It’s not about apathy.
                                    It’s about cultivating indifference to things that don’t matter.
                                    Be careful, as Marcus Aurelius warns, not to give the little things
                                    more time and thought they deserved. Maybe looking back at this
                                    year reveals how much effort you’ve frittered away worrying about
                                    the trivial. If so, let 2018 be a year that you only devote energy
                                    to things that truly matter — get the important things right by ignoring the insignificant.</p3> <br /><br/>

                                <p4> <strong><a href="http://geni.us/2dAWHp">The Way to Love: The Last Meditations of Anthony de Mello</a> by Anthony de Mello </strong> Coach Shaka Smart 
                                    recommended this little book (and it’s a little book, probably the smallest I’ve ever read. 
                                    It fits in your palm). But it’s an incredibly wise and helpful read. Written by a Catholic
                                    Priest who’d lived in India, the book has this unusual convergence of eastern and western thought.
                                    One of my favorite lines: “The question to ask is not ‘What’s wrong with this person?’ 
                                    but ‘What does this irritation tell me about myself?’ I plan on regularly revisiting it throughout 2018.
                                    But What If We’re Wrong by Chuck Klosterman It’s always good to remind ourselves that almost everything we’re certain about will 
                                    probably be eventually proven wrong. </p4><br /><br />

                                    <p1><strong><a href="http://geni.us/okvZg">Deep Work: Rules for Focused Success in a Distracted World</a> by Cal
                                    Newport</strong> Media consumption went way up in 2017. For most of us,
                                    that meant happiness and productivity went way down. The world is becoming
                                    noisier and will become more so every day. If you can’t cultivate the
                                    ability to have quiet, insightful, deeply focused periods of productive
                                    work, you’re going to get screwed. This is a book that explains how to
                                    cultivate and protect that skill — the ability to do deep work.
                                    I strongly urge you to begin this practice in 2018—
                                    if you want to get anything done or perform your best.</p1><br /><br/>

                                <p2><strong><a href="http://geni.us/yBTi">The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to
                                    Living a Good Life</a> by Mark Manson</strong> To me, practical philosophy has
                                    always been the art knowing what to — and what not to — give a
                                    fuck about. That’s what Mark’s book is about. It’s not about apathy.
                                    It’s about cultivating indifference to things that don’t matter.
                                    Be careful, as Marcus Aurelius warns, not to give the little things
                                    more time and thought they deserved. Maybe looking back at this
                                    year reveals how much effort you’ve frittered away worrying about
                                    the trivial. If so, let 2018 be a year that you only devote energy
                                    to things that truly matter —
                                    get the important things right by ignoring the insignificant.</p2> <br /><br/>

                                <p3> <strong><a href="http://geni.us/yBTi">The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to
                                    Living a Good Life</a> by Mark Manson</strong>To me, practical philosophy has
                                    always been the art knowing what to — and what not to — give a
                                    fuck about. That’s what Mark’s book is about. It’s not about apathy.
                                    It’s about cultivating indifference to things that don’t matter.
                                    Be careful, as Marcus Aurelius warns, not to give the little things
                                    more time and thought they deserved. Maybe looking back at this
                                    year reveals how much effort you’ve frittered away worrying about
                                    the trivial. If so, let 2018 be a year that you only devote energy
                                    to things that truly matter — get the important things right by ignoring the insignificant.</p3> <br /><br/>

                                <p4> <strong><a href="http://geni.us/2dAWHp">The Way to Love: The Last Meditations of Anthony de Mello</a> by Anthony de Mello </strong> Coach Shaka Smart 
                                    recommended this little book (and it’s a little book, probably the smallest I’ve ever read. 
                                    It fits in your palm). But it’s an incredibly wise and helpful read. Written by a Catholic
                                    Priest who’d lived in India, the book has this unusual convergence of eastern and western thought.
                                    One of my favorite lines: “The question to ask is not ‘What’s wrong with this person?’ 
                                    but ‘What does this irritation tell me about myself?’ I plan on regularly revisiting it throughout 2018.
                                    But What If We’re Wrong by Chuck Klosterman It’s always good to remind ourselves that almost everything we’re certain about will 
                                    probably be eventually proven wrong. </p4><br /><br />
                                                                
                            </div>
                                <h1 >Like to Read? </h1>
                                <p style={{fontSize:"20px"}}>I’ve created a list of 15 books<strong> you’ve never heard 
                                    of that</strong> will alter your worldview and help you excel at your career.</p><br/>
                                <p style={{fontSize:"20px", tsxtDecoration:"underline", color:"black"}}><a href ="#">Get the secret book list here!</a></p>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}
