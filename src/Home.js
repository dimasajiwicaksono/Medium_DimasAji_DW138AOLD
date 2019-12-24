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
import axios from 'axios';



const article = [
  {
    id: 1,
    num: "01",
    img: "https://miro.medium.com/max/504/1*DCC8VXUnCONv8i5G4b4V9g.jpeg",
    title: "Data Science is the sexiest job in 21st century",
    author: "Robent Langdon in Towards Science ",
    info: "Des 25, 2018. 6 min read"
  },
  {
    id: 2,
    num: "02",
    img: 'https://miro.medium.com/max/738/0*xL1tenKdF7n2j7vV.jpeg ',
    title: "Have you read documentation ReactJs?",
    author: "H.R Montefiore",
    info: "Feb 10, 2017. 6 min read"
  },
  {
    id: 3,
    num: "03",
    img: "https://miro.medium.com/max/739/1*lg9nkMo7qaE3PSTbpgbdlQ.png",
    title: "Tutorial: .Map (), .Filter(), and Reduce () ReactJS and ReactNative",
    author: "Muhammad Abdullah",
    info: "Nov 3 . 10 min read"
  }
]


const articleBig = [
  {
    id: 6,
    img: "https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg",
    superTitle: "BASED ON YOUR READING HISTORY",
    title: "If You Only Read A Few Books in 2018, Read These",
    subTitle: "If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused,where should you start?",
    author: "Jeremy Gothlifield ",
    info: "Des 10. 6 min read",
    url: '/article_detail'
  }
]


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articlePopular:[],
    };
  }




  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/articles')
      .then(res => {
        const articles = res.data;
        this.setState({ articles });
        console.log(articles)
      })
      
      axios.get('http://localhost:5000/api/v1/article_popular')
      .then(res => {
        const articlePopular = res.data;
        this.setState({ articlePopular });
        console.log(articlePopular)
      })
    
  }


  render() {

// inisiasi number for popular 
let number =  1;

    return (
      <React.Fragment>
        <Container style={{ paddingTop: "0px", marginTop: "0px" }}>
          <Navbar>
            <Header />
          </Navbar>
          <Col sticky="Top" style={{ paddingTop: 0 }}>
            <Category />
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
                {this.state.articlePopular.map(item =>
                  <PopularArticle
                    num={number++}
                    title={item.title}
                    author={item.userId.fullname}
                    info={item.createdAt} />
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
              {this.state.articles.map(item =>
                <MainArticle
                  urlLink={item.image}
                  superTitle={item.superTitle}
                  title={item.title}
                  subTitle={item.content}
                  author={item.userId.fullname}
                  infoDate={item.createdAt}
                  url={item.url} />
              )}
          
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default Home;