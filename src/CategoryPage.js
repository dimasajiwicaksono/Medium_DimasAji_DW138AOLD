import React, { Component } from 'react';
import { Container, Card, Row, Col, Button, Figure } from 'react-bootstrap';
import Header from './Header';
import MainArticle from'./components/MainArticle';
import CategoryArticle from './components/CategoryArticle';







const articleMain = [
    {
        img: 'https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png',
        id: 1,
        superTitle: "BASED ON YOUR READING HISTORY",
        title: "15 Stunning Data Visualizations (And What You Can Learn From Them)",
        subTitle: "We’re drowning in data. Everyday, 2.5 quintillion bytes of data are created.",
        author: "Marcellio in Towards Science ",
        info: "Des 10. 6 min read",
        color:"primary"
    },
    {
        id: 2,
        img: 'https://miro.medium.com/max/738/0*xL1tenKdF7n2j7vV.jpeg ',
        superTitle: "ARTIFICIAL INTELLEGENCE",
        title: "K-means Clustering Python Example",
        subTitle: "We’re drowning in data. Everyday, 2.5 quintillion bytes of data are created.",
        author: "Cork Marlin in Towards Sciecne",
        info: "Des 10, 2019. 6 min read",
        color:"light"
    },
    {
        id: 3,
        img: "https://miro.medium.com/max/739/1*lg9nkMo7qaE3PSTbpgbdlQ.png",
        superTitle: "POPULAR IN MEDIUM",
        title: "Startup CEO salaries",
        subTitle: "We’ve seen a wide range of CEO salaries in our portfolio, from as low as $35k annually to as much as $325k (plus bonus)",
        author: "Sammy Abdullah ",
        info: "Mar 23. 4 min read"
    }

]


    {/*------------------------------------------ Header ----------------------------------------*/}

export default class CategoryPage extends Component {
    render() {
        return (
            <Container style={{ marginTop: "0px", paddingTop: "0px" }}>
                <Header />
                <div style={{ paddingTop: "40px", paddingBottom: "40px" }} className="textbody" inline>
                    <div className="text">
                        <Row className="text2">
                            <Col lg={3} className="oneZero">
                                <Figure.Image width={500} src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" alt="OneZero"
                                />
                            </Col>
                            <Col lg={6} className="textFront">
                                <div className="textFront" style={{ fontSize: "25px" }} />
                                <span style={{ color: "purple" }}> <b> The front lines of the future.</b> </span>
                                <span> <b> A Medium publication about tech and science.</b> </span>
                            </Col>
                            <Col >
                                <Button variant="outline-dark" style={{ marginLeft: "100px", marginTop: "20px" }}> Follow</Button>
                            </Col>
                        </Row>
                    </div>
                </div>


        {/*------------------------------------------ containSatart ----------------------------------------*/}

                <Row className="card1" style={{ marginTop: "40px", marginBottom: "40px",marginright:"0px"}}>
                    {articleMain.map (item =>
                    <CategoryArticle  
                        urlLink = {item.img}
                        title ={item.title}
                        subTitle={item.subTitle}
                        author={item.author}
                        info={item.info}
                        color={item.color}
                        /> )}
                        

                </Row>
            {/*------------------------------------------ containEnd ----------------------------------------*/}

                <Row className="cardColoumn">
                    <Col>
                        <Card className="text" bg="warning" text="dark" style={{ width: "max", height: "250px" }}>
                            <Card.Body className="quote" style={{ paddingLeft: "200px", paddingRight: "200px", paddingTop: "50px" }}>
                                < blockquote className="blockquote" >
                                    <h1 style={{ fontSize: "30px" }}>"Would You pay $1 Milion and fly to South America for a chneg to live longer?"</h1>
                                    <small className="text-muted" >
                                        <cite title="Source Title" style={{ fontSize: "20px" }}>--Ernitiy Mullin</cite>
                                    </small>
                                    <br />
                                    <footer className="footer" style={{ marginTop: "10px" }}>
                                        <p className="title" style={{ paddingBottom: "0px", marginBottom: "0px" }}> Sceinetist Cat have a innovation for dog and cat domestication </p>
                                        <p className="Date">Des 25, 2018 . 8 min read </p>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <br />
    {/*------------------------------------------ contain Article ----------------------------------------*/}

                <Row style={{width:"700px",marginLeft:"200px", marginRight:"200px"}}>
                    {articleMain.map(item =>
                        <MainArticle
                        urlLink = {item.img}
                        superTitle={item.superTitle}
                        title={item.title}
                        subTitle={item.subTitle}
                        author={item.author}
                        info={item.info} />
                        )}
                </Row>
            </Container>

        )
    }

}


