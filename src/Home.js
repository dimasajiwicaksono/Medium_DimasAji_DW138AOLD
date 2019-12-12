import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row, Navbar, Button } from 'react-bootstrap';
import ListArticle from './components/ListArticle';
import ListArticleBig from './components/ListArticleBig';
import MainArticle from './components/MainArticle';
import PopularArticle from './components/PopularArticle';
import Header from './Header';
import Category from './Category';



const article = [
  {
    id: 1,
    num:"01",
    img :"https://miro.medium.com/max/504/1*DCC8VXUnCONv8i5G4b4V9g.jpeg", 
    title: "Data Science is the sexiest job in 21st century",
    author : "Robent Langdon in Towards Science ",
    info: "Des 25, 2018. 6 min read"
  },
  {
    id: 2,
    num:"02",
    img :'https://miro.medium.com/max/738/0*xL1tenKdF7n2j7vV.jpeg ',
    title: "Have you read documentation ReactJs?",
    author: "H.R Montefiore",
    info: "Feb 10, 2017. 6 min read"
  },
  {
    id: 3,
    num:"03",
    img : "https://miro.medium.com/max/739/1*lg9nkMo7qaE3PSTbpgbdlQ.png",
    title: "Tutorial: .Map (), .Filter(), and Reduce () ReactJS and ReactNative",
    author: "Muhammad Abdullah",
    info: "Nov 3 . 10 min read"
  }
]


const articleBig = [
  {
    id: 6,
    img :"https://miro.medium.com/max/490/1*wGhiyH4w0SNIeHBGGtmzsg.png",
    superTitle: "BASED ON YOUR READING HISTORY",
    title: "Tutorial: how to deploy a production React app to Heroku",
    subTitle:"Create-react-app and Heroku are great tools for building highly performant apps, .....",
    author : "Jeremy Gothlifield ",
    info: "Des 10. 6 min read",
    url:'https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08'
  }
]


const articleMain = [
  {
    img :'https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg',
    id: 1,
    superTitle: "BASED ON YOUR READING HISTORY",
    title: "If You Only Read A Few Books in 2018, Read These",
    subTitle:"If you’d liked to be jerked around less,provoked less, and more productive and inwardly focused,",
    author : "Marcellio in Towards Science ",
    info: "Des 10. 6 min read",
    url :"/ArticleDetail"
  },
  {
    id: 2,
    img : 'https://miro.medium.com/max/738/0*xL1tenKdF7n2j7vV.jpeg ',
    superTitle: "ARTIFICIAL INTELLEGENCE",
    title: "K-means Clustering Python Example",
    subTitle:"We’re drowning in data. Everyday, 2.5 quintillion bytes of data are created.",
    author : "Cork Marlin in Towards Sciecne",
    info: "Des 10, 2019. 6 min read"
  },
  {
    id: 3,
    img : "https://miro.medium.com/max/739/1*lg9nkMo7qaE3PSTbpgbdlQ.png" ,
    superTitle: "POPULAR IN MEDIUM",
    title: "Startup CEO salaries",
    subTitle:"We’ve seen a wide range of CEO salaries in our portfolio, from as low as $35k annually to as much as $325k (plus bonus)",
    author : "Sammy Abdullah ",
    info: "Mar 23. 4 min read"
  },
  {
    id: 4,
    img :"https://miro.medium.com/max/504/1*DCC8VXUnCONv8i5G4b4V9g.jpeg",
    superTitle: "DATA SCIENCE",
    title: "Isotonic Regression is THE Coolest Machine-Learning Model You Might Not Have Heard Of",
    subTitle:"Machine Learning with isotonic Regression you should try to develop.",
    author : "Emment Bourdeu ",
    info: "Jan 12. 3 min read"
  },
  {
    id: 5,
    img : "https://miro.medium.com/max/1920/1*GyYjPtuJ6BgIg7UJ5Y8yig.jpeg",
    superTitle: "BASED ON YOUR READING HISTORY",
    title: "4 Ways Introverts Can Start a Conversation with a Stranger",
    subTitle:"Starting conversations with people I have never met is like my superpower.",
    author : "Dan Brown in DailySosial",
    info: "Nov 23, 2018. 6 min read"
  },
  {
    id: 6,
    img :"https://miro.medium.com/max/490/1*wGhiyH4w0SNIeHBGGtmzsg.png",
    superTitle: "BASED ON YOUR READING HISTORY",
    title: "Tutorial: how to deploy a production React app to Heroku",
    subTitle:"Create-react-app and Heroku are great tools for building highly performant apps, .....",
    author : "Jeremy Gothlifield ",
    info: "Des 10. 6 min read"
  },
  
]





// const categoryMenus = [
//   {id: 1, name : "HOME" }, 
//   {id: 2, name : "ONEZERO"}, 
//   {id: 3, name : "ELEMENTAL"},
//   {id: 4, name : " GEN"},
//   {id: 5, name : " ZORA"},
//   {id: 6, name : " FORGE"},
//   {id: 7, name : " HUMAN PARTS"},
//   {id: 8, name : " LEVER"},
//   {id: 9, name : " HEATED"},
//   {id: 10, name : " MODUS"}
// ]



class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={{ paddingTop: "0px", marginTop:"0px" }}>
            <Navbar>
              <Header />
            </Navbar>
            <Col sticky="Top" style={{paddingTop:0}}>
            {/* <Navbar bg="light" variant="dark"> */}
              {/* {categoryMenus.map (item => */}
                <Category />
                  {/* // name= {item.name} /> )} */}
            {/* </Navbar> */}
            </Col>
        </Container>


        {/*-----------------------------------------    Main Contain ---------------------------------------------------*/}
        <Container className="topBanner">
          <Row>
            <Col className="right">
              {articleBig.map(item =>
                <ListArticleBig
                  urlLink={item.img}
                  title={item.title}
                  subTitle={item.subTitle}
                  author={item.author}
                  info={item.info}
                  url={item.url} />
              )}
            </Col>
            <Col className="center">
              {article.map(item =>
                <ListArticle
                  urlLink={item.img}
                  title={item.title}
                  author={item.author}
                  info={item.info} />
              )}
            </Col>
            <Col className="left">
              {articleBig.map(item =>
                <ListArticleBig
                  urlLink={item.img}
                  title={item.title}
                  subTitle={item.subTitle}
                  author={item.author}
                  info={item.info} />
              )}
            </Col>
          </Row>
        </Container>

        {/*-----------------------------------Content Bottom*---------------------------------------*/}

        <Container className="content-bottom">
          <Row classsName="contentBottom">
            <Col xs lg={4} className="populerMedium">
              <Row xs lg={4} ClassName="mediumAwal">
                <Col >
                  <p style={{ textAlign: "left", fontSize: "20px" }}><b> Popular in Medium </b></p>
                </Col>
              </Row>
              <Col className="popularArticle">
                {article.map(item =>
                  <PopularArticle
                    num={item.num}
                    title={item.title}
                    author={item.author}
                    info={item.info} />
                )}
              </Col>

              <Row style={{ fontSize: "14px", color: "grey" }}>
                <Col>Help</Col>
                <Col>Status</Col>
                <Col>Career</Col>
                <Col>Blog</Col>
                <Col>Writers</Col>
                <Col>Privacy</Col>
                <Col>Term</Col>
                <Col>About</Col>
              </Row>
            </Col>

            {/*-----------------------------  Main Article --------------------------*/}
            <Col className="mainArticle">
              {articleMain.map(item =>
                <MainArticle
                  urlLink = {item.img}
                  superTitle={item.superTitle}
                  title={item.title}
                  subTitle={item.subTitle}
                  author={item.author}
                  info={item.info}
                  url={item.url}/>
              )}
            </Col>
          </Row>
        </Container>
    </React.Fragment>
    );
  }
}

export default Home;