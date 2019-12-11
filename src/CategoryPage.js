import React, {Component} from 'react';
import {Navbar,Container,Card, Row, Col, Button, Figure} from 'react-bootstrap';
import Header from './Header';





export default class CategoryPage extends Component {
    render () {
        return (
            <Container style={{marginTop:"0px",paddingTop:"0px"}}>
                <Header />
                <div style ={{paddingTop:"40px", paddingBottom:"40px" }} className="textbody" inline>
                    <div className="text">
                        <Row className="text2">
                            <Col lg={3} className="oneZero">
                                <Figure.Image width={500} src ="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" alt="OneZero"
                                />
                            </Col>
                            <Col lg={6}className="textFront">
                                <div className="textFront" style={{fontSize:"25px"}}/>
                                <span style={{color:"purple"}}> <b> The front lines of the future.</b> </span>
                                <span> <b> A Medium publication about tech and science.</b> </span>
                            </Col>
                            <Col >
                                <Button variant="outline-dark"style={{marginLeft:"100px",marginTop:"20px"}}> Follow</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Row className="card1" style={{marginTop:"40px", marginBottom:"40px"}}>
                    <Col lg={8} style={{paddingRight:"0px"}}>
                    <Card className="bg-light text-dark">
                        <Card.Img src="https://miro.medium.com/max/1958/1*KrWzdaB7HuC1mQvZnHmIDg.png" alt="Card image" style={{width:"600px", height:"350px"}}/>
                        
                    </Card>
                    </Col>
                    <Col style={{paddingLeft:"0px"}}>
                    <Card className="text-center" bg="primary" text="white" style={{ height:"350px"}}>
                        <div className="cardText" style={{margin:"20px"}}>
                            <Card.Text style={{fontFamily:"", fontSize:"30px"}}>
                                Architects Are Playing With the Future of Design in Video Games.</Card.Text>
                            <Card.Text style={{fontSize:"15px"}}>
                                Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented 
                                and the invisible made visible</Card.Text>
                            <Card.Text style={{color:"Yellow", marginBottom:"0px"}}>
                                <b>Thomas McMullan </b></Card.Text>
                            <Card.Text>
                                Des 9 . 6 min read</Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>

                <Row className="card2" style={{marginTop:"40px", marginBottom:"40px"}}>
                    <Col lg={8} style={{paddingRight:"0px"}}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://miro.medium.com/max/3840/1*yYP8rlvTuCML1_N9AlQOTg.jpeg" alt="Card image" style={{width:"750px", height:"350px"}}/>
                        
                    </Card>
                    </Col>
                    <Col style={{paddingLeft:"0px"}}>
                    <Card className="text-center" bg="primary" text="white" style={{ height:"350px"}}>
                        <div className="cardText" style={{margin:"20px"}}>
                            <Card.Text style={{fontFamily:"", fontSize:"30px"}}>
                                Architects Are Playing With the Future of Design in Video Games.</Card.Text>
                            <Card.Text style={{fontSize:"15px"}}>
                                Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented 
                                and the invisible made visible</Card.Text>
                            <Card.Text style={{color:"Yellow", marginBottom:"0px"}}>
                                <b>Thomas McMullan </b></Card.Text>
                            <Card.Text>
                                Des 9 . 6 min read</Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>

                <Row className="card3" style={{marginTop:"40px", marginBottom:"40px"}}>
                    <Col lg={8} style={{paddingRight:"0px"}}>
                    <Card className="bg-light text-white">
                        <Card.Img src="https://miro.medium.com/max/1024/1*uNgmHEUZHeBejN0JKd_m8A.gif" alt="Card image" style={{width:"750px", height:"350px"}}/>
                        
                    </Card>
                    </Col>
                    <Col style={{paddingLeft:"0px"}}>
                    <Card className="text-center" bg="light" text="dark" style={{ height:"350px"}}>
                        <div className="cardText" style={{margin:"20px"}}>
                            <Card.Text style={{fontFamily:"", fontSize:"30px"}}>
                                Architects Are Playing With the Future of Design in Video Games.</Card.Text>
                            <Card.Text style={{fontSize:"15px"}}>
                                Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented 
                                and the invisible made visible</Card.Text>
                            <Card.Text style={{color:"blue", marginBottom:"0px"}}>
                                <b>Thomas McMullan </b></Card.Text>
                            <Card.Text>
                                Des 9 . 6 min read</Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>

                <Row className="card4" style={{marginTop:"40px", marginBottom:"40px"}}>
                    <Col lg={8} style={{paddingRight:"0px"}}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://miro.medium.com/max/1958/1*KrWzdaB7HuC1mQvZnHmIDg.png" alt="Card image" style={{width:"600px", height:"350px"}}/>
                        
                    </Card>
                    </Col>
                    <Col style={{paddingLeft:"0px"}}>
                    <Card className="text-center" bg="primary" text="white" style={{ height:"350px"}}>
                        <div className="cardText" style={{margin:"20px"}}>
                            <Card.Text style={{fontFamily:"", fontSize:"30px"}}>
                                Architects Are Playing With the Future of Design in Video Games.</Card.Text>
                            <Card.Text style={{fontSize:"15px"}}>
                                Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented 
                                and the invisible made visible</Card.Text>
                            <Card.Text style={{color:"Yellow", marginBottom:"0px"}}>
                                <b>Thomas McMullan </b></Card.Text>
                            <Card.Text>
                                Des 9 . 6 min read</Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>

                <Row className="card5" style={{marginTop:"40px", marginBottom:"40px"}}>
                    <Col lg={8} style={{paddingRight:"0px"}}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://miro.medium.com/max/1958/1*KrWzdaB7HuC1mQvZnHmIDg.png" alt="Card image" style={{width:"600px", height:"350px"}}/>
                        
                    </Card>
                    </Col>
                    <Col style={{paddingLeft:"0px"}}>
                    <Card className="text-center" bg="primary" text="white" style={{ height:"350px"}}>
                        <div className="cardText" style={{margin:"20px"}}>
                            <Card.Text style={{fontFamily:"", fontSize:"30px"}}>
                                Architects Are Playing With the Future of Design in Video Games.</Card.Text>
                            <Card.Text style={{fontSize:"15px"}}>
                                Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented 
                                and the invisible made visible</Card.Text>
                            <Card.Text style={{color:"Yellow", marginBottom:"0px"}}>
                                <b>Thomas McMullan </b></Card.Text>
                            <Card.Text>
                                Des 9 . 6 min read</Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>







            </Container>

        )
    }

}


