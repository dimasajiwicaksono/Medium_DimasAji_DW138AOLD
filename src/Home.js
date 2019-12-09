import React, {Component} from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
import { ReactComponent as Icon} from './magnifying-glass.svg';
import {Image} from 'react-bootstrap';
import{Button} from'react-bootstrap';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';




class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <Container style={{paddingTop:"15px"}}>
          <Row style={{height:"60px"}}>
              <Col className="Navbar-text">  
                <Navbar bg = "light" variant ="dark">
                <Navbar.Brand href="#">
                  <h1 style={{
                  fontSize:"30px",
                  color:"Black",
                  fontFamily:"bold-content-sans-serif-font",
                  marginLeft:"20px",
                  paddingTop:"10px",
                  marginTop:"0px"
                  }}><b>Medium</b></h1>
                </Navbar.Brand>
                </Navbar>
              </Col>
              
              <Nav className="icon" inline>
                <div className="icon-search">
                    <span><Icon style={{width:"50%",height:"50%", }} /></span>
                </div>
                <div className="icon-shaped">
                    <span><NotificationsNoneOutlinedIcon style={{marginRight:"20px"}}></NotificationsNoneOutlinedIcon> </span>
                </div>
                <div className="Button">
                  <span> <Button variant="outline-dark" type="submit"style={{marginRight:"20px"}}> Upgrade</Button></span>
                </div>
                <div className="icon-avaratar">
                    <span><Image src="https://miro.medium.com/fit/c/64/64/1*2bn998LOe7kbY41r0M5Row.jpeg" style={{width:"60%",height:"60%"}} roundedCircle/></span>
                </div>
              </Nav>
                  
            </Row>

        <Row>
              <Col xl ="auto" ClassName="topBar-text">   
              <Navbar bg = "light" variant ="dark">
                <Nav className="topNav">
                  <a className="active" href="#"> HOME </a>
                  <a href = "#"> ONEZERO </a>
                  <a href = "#"> ELEMENTAL </a>
                  <a href = "#"> GEN </a>
                  <a href = "#"> ZORA </a>
                  <a href = "#"> GEN </a>
                  <a href = "#"> FORGE </a>
                  <a href = "#"> HUMAN PARTS </a>
                  <a href = "#"> MARKER </a>
                  <a href = "#"> LEVEL </a>
                  <a href = "#"> HEATED </a>
                  <a href = "#"> MODUS </a>
                  </Nav>
                  </Navbar>
              </Col>
            </Row>
        </Container>
        <Container className="Content">
          <Row>
            <Col xl className="content-left" >
                  <img src = "https://miro.medium.com/max/1600/1*OF0xEMkWBv-69zvmNs6RDQ.gif" style={{width:"80%", height:"50%"}}/><br/>
                  <h4 style={{fontSize:"20px"}}> Top 5 Mistakes of Greenhorn Data Scientist</h4>
                  <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job. Avoid these mistakes to be successful right away.</p><br/>
                  <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                      Des 7, 2019 . 6 min read</p>
            </Col>
            <Col>
              <Row itemID="1">
                  <img src ="https://miro.medium.com/max/4000/1*o6ZY4hOLIQty9tJdzOPnGg.png" style={{width:"40%", height:"60%"}}/><br/><br/><br/><br/><br/><br/>
                <Col>
                    <p style={{fontSize:"14px",textAlign:"justify"}}> <b>Bagimana cara meneliti user research?</b> <br/><br/>
        <p style={{fontSize:"13px"}}> 
                      
                  {/* membuat popover yang ditrigger oleh mouse  */}
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">DWIKANI</Tooltip>}>
                        <span className="d-inline-block">
                          Dwikani 
                        </span>
                    </OverlayTrigger>
                      
                      in Towards Data Science <br/> Feb 5 . 9 min read</p></p>
                </Col>
              </Row>

              <Row itemID="2">
                    <img src ="https://miro.medium.com/max/5184/0*kePbHdMhw6JuJbNd" style={{width:"40%", height:"30%"}}/><br/><br/><br/><br/><br/><br/>
                <Col>
                    <p style={{fontSize:"14px", textAlign:"justifty"}}><b>Linear Algebra Essentials with Numpy (part 1) </b></p>
                    <p style={{fontSize:"13px"}}>GoFrendi Gunawan <br/> Feb 5 . 9 min read</p>
                </Col>
              </Row>

              <Row itemID="3">
                  <img src ="https://miro.medium.com/max/432/1*h23jdLCNoALpXH2XzV0nsw.png" style={{width:"40%", height:"30%"}}/>
                <Col>
                  <p style={{fontSize:"14px",textAlign:"justify"}}> <b> Complete Guide to an Interactive Geographical Map using Python </b></p>
                  <p style={{fontSize:"13px"}}>R.Cohen in Towards Data Science <br/> Feb 5 . 9 min read</p>
                </Col>
              </Row>
            </Col>
            <Col xl ClassName="content-right">
                    <img src = "https://miro.medium.com/max/6115/1*J2Mo6TmrSrFw6fAwrAuzvQ.png" style={{width:"100%", height:"50%"}}/><br/>
                    <h4 style={{fontSize:"20px"}}>Top 4 Numpy Functions You Don’t Know About (Probably)</h4>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1, 2019 . 6 min read </p>
                    <p style={{color:"green", marginLeft:"190px"}}>SEE ALL FEATURED ></p>
                    
            </Col>  
          </Row>
        </Container>

                                                          {/*Content Bottom*/}

        <Container className="content-bottom">
          <Row classsName="contentBottom">
              <Col xs lg={4} className="populerMedium">
                <Row xs lg={4}ClassName="mediumAwal">
                  <Col > 
                    <p style={{textAlign:"left", fontSize:"20px"}}><b> Popular in Medium </b></p>
                  </Col>
                </Row>
              
                <Row xs lg={4} className="mediumAwalkolom">
                  <Col xs lg ={2} className="number" style={{fontSize:"30px",
                        color:"grey", textAlign:"right"}}> 01
                  </Col>
                  
                  <Col xs lg={10} className="medium AwalKonten" > 
                      <p><b>A Nude ‘Playboy’ Photo Has Been a Mainstay
                        in Testing Tech for Decades Corinne</b></p>
                        <p style={{fontSize:"12px"}}>Rebbeca Vickery in Towards Data Science <br/>
                        Des 26 . 4 min read </p>
                  </Col>
                </Row>

                <Row xs lg={4} className="mediumAwalkolom">
                  <Col xs lg ={2} className="number" style={{fontSize:"30px",
                        color:"grey", textAlign:"right"}}> 02
                  </Col>
                  
                  <Col xs lg={10} className="medium AwalKonten" > 
                      <p><b>A Nude ‘Playboy’ Photo Has Been a Mainstay
                        in Testing Tech for Decades Corinne</b></p>
                        <p style={{fontSize:"12px"}}>Rebbeca Vickery in Towards Data Science <br/>
                        Des 26 . 4 min read </p>
                  </Col>
                </Row>


                <Row xs lg={4} className="mediumAwalkolom">
                  <Col xs lg ={2} className="number" style={{fontSize:"30px",
                        color:"grey", textAlign:"right"}}> 03
                  </Col>
                  
                  <Col xs lg={10} className="medium AwalKonten" > 
                      <p><b>A Nude ‘Playboy’ Photo Has Been a Mainstay
                        in Testing Tech for Decades Corinne</b></p>
                        <p style={{fontSize:"12px"}}>Rebbeca Vickery in Towards Data Science <br/>
                        Des 26 . 4 min read </p>
                  </Col>
                </Row>

                <Row xs lg={4} className="mediumAwalkolom">
                  <Col xs lg ={2} className="number" style={{fontSize:"30px",
                        color:"grey", textAlign:"right"}}> 04
                  </Col>
                  
                  <Col xs lg={10} className="medium AwalKonten" > 
                      <p><b>A Nude ‘Playboy’ Photo Has Been a Mainstay
                        in Testing Tech for Decades Corinne</b></p>
                        <p style={{fontSize:"12px"}}>Rebbeca Vickery in Towards Data Science <br/>
                        Des 26 . 4 min read </p>
                  </Col>
                </Row>

                <Row xs lg={4} className="mediumAwalkolom">
                  <Col xs lg ={2} className="number" style={{fontSize:"30px",
                        color:"grey", textAlign:"right"}}> 05
                  </Col>
                  
                  <Col xs lg={10} className="medium AwalKonten" > 
                      <p><b>A Nude ‘Playboy’ Photo Has Been a Mainstay
                        in Testing Tech for Decades Corinne</b></p>
                        <p style={{fontSize:"12px"}}>Rebbeca Vickery in Towards Data Science <br/>
                        Des 26 . 4 min read </p>
                  </Col>
                </Row>
                <Row style={{fontSize:"14px",color:"grey"}}>
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

      

              <Col lg={8} className="contentLeft">
              <Row className="contentLeft1">
                  <Col className="textContent"> 
                    <p1> BASED ON YOUR READING HISTORY</p1> <br/>
                    <p2 style ={{fontSize:"20px"}}><b>Predicting Dengue Spread Using Seasonal ARIMAX Model and Meteorological Data </b> </p2><br/><br/>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1 . 6 min read </p>
                  </Col>
                  <Col lg={3}className="picture">
                    <center/>
                    <img src ="https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png"style={{width:"100%", height:"50%"}}/>
                  </Col>
              </Row>
              <Row className="contentLeft1">
                  <Col className="textContent"> 
                    <p1> BASED ON YOUR READING HISTORY</p1> <br/>
                    <p2 style ={{fontSize:"20px"}}><b>Predicting Dengue Spread Using Seasonal ARIMAX Model and Meteorological Data </b> </p2><br/><br/>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1 . 6 min read </p>
                  </Col>
                  <Col lg={3}className="picture">
                    <center/>
                    <img src ="https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png"style={{width:"100%", height:"50%"}}/>
                  </Col>
              </Row>
              <Row className="contentLeft1">
                  <Col className="textContent"> 
                    <p1> BASED ON YOUR READING HISTORY</p1> <br/>
                    <p2 style ={{fontSize:"20px"}}><b>Predicting Dengue Spread Using Seasonal ARIMAX Model and Meteorological Data </b> </p2><br/><br/>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1 . 6 min read </p>
                  </Col>
                  <Col lg={3}className="picture">
                    <center/>
                    <img src ="https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png"style={{width:"100%", height:"50%"}}/>
                  </Col>
              </Row>
              <Row className="contentLeft1">
                  <Col className="textContent"> 
                    <p1> BASED ON YOUR READING HISTORY</p1> <br/>
                    <p2 style ={{fontSize:"20px"}}><b>Predicting Dengue Spread Using Seasonal ARIMAX Model and Meteorological Data </b> </p2><br/><br/>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1 . 6 min read </p>
                  </Col>
                  <Col lg={3}className="picture">
                    <center/>
                    <img src ="https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png"style={{width:"100%", height:"50%"}}/>
                  </Col>
              </Row>
              <Row className="contentLeft1">
                  <Col className="textContent"> 
                    <p1> BASED ON YOUR READING HISTORY</p1> <br/>
                    <p2 style ={{fontSize:"20px"}}><b>Predicting Dengue Spread Using Seasonal ARIMAX Model and Meteorological Data </b> </p2><br/><br/>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1 . 6 min read </p>
                  </Col>
                  <Col lg={3}className="picture">
                    <center/>
                    <img src ="https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png"style={{width:"100%", height:"50%"}}/>
                  </Col>
              </Row>
              <Row className="contentLeft1">
                  <Col className="textContent"> 
                    <p1> BASED ON YOUR READING HISTORY</p1> <br/>
                    <p2 style ={{fontSize:"20px"}}><b>Predicting Dengue Spread Using Seasonal ARIMAX Model and Meteorological Data </b> </p2><br/><br/>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1 . 6 min read </p>
                  </Col>
                  <Col lg={3}className="picture">
                    <center/>
                    <img src ="https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png"style={{width:"100%", height:"50%"}}/>
                  </Col>
              </Row>
              <Row className="contentLeft1">
                  <Col className="textContent"> 
                    <p1> BASED ON YOUR READING HISTORY</p1> <br/>
                    <p2 style ={{fontSize:"20px"}}><b>Predicting Dengue Spread Using Seasonal ARIMAX Model and Meteorological Data </b> </p2><br/><br/>
                    <p style={{fontSize:"14px"}}>You binged online courses and landed your first Data Science job.</p>
                    <p style={{fontSize:"14px"}}>Jan Zawadzki in Towards Data Science <br/>
                        Des 1 . 6 min read </p>
                  </Col>
                  <Col lg={3}className="picture">
                    <center/>
                    <img src ="https://miro.medium.com/max/808/1*KIMq2ISjROvOFiJBfGYmkg.png"style={{width:"100%", height:"50%"}}/>
                  </Col>
              </Row>
              </Col>
          </Row>

{/*---------------------------------------------------------------------------------------------------------*/}
        </Container>
      </React.Fragment>
    );
  }
  }

export default Home;


