import React, { Component } from 'react';
import {Card, Col,Row} from 'react-bootstrap';

export default class CategoryArticle extends Component {
    render() {
        return (
            <div>
                <Row style={{marginBottom:"20px",marginTop:"20px",marginRight:"0px"}}>
                    <Col style={{paddingRight:"0px"}}>
                    <Card className="bg-light text-dark" style={{paddingRight:"0px"}}>
                            <Card.Img src={this.props.urlLink} alt="Card image" style={{ width: "800px",
                                                                                         height: "300px", 
                                                                                  objectFit: "Cover" }} />
                            </Card>
                    </Col>

                    <Col style={{marginLeft:"0px", paddingLeft:"0px"}}>
                            
                       <Card className="text-center" bg="primary" text="white" style={{height:"300px", marginLeft:"0px",paddingLeft:"0px"}}>
                            <div className="cardText" style={{margin:"10px"}} >
                                <Card.Text style={{ fontSize: "25px" }}>
                                    {this.props.title}</Card.Text>
                                <Card.Text style={{ fontSize: "15px" }}>
                                    {this.props.subTitle}</Card.Text>
                                <Card.Text style={{ color: "yellow", marginBottom:"0px"}}>
                                    <b>{this.props.author} </b></Card.Text>
                                <Card.Text>
                                    {this.props.info}</Card.Text>
                            </div>
                        </Card>

                    </Col>

                </Row>
                    <br />

                        {/* --------------conten----------------- */}

                <Row style={{marginBottom:"20px",marginTop:"20px",marginRight:"0px"}}>
                    <Col style={{paddingRight:"0px"}}>
                        <Card className="text-center" bg="primary" text="white" style={{height:"300px", marginLeft:"0px",paddingLeft:"0px"}}>
                                <div className="cardText" style={{margin:"10px"}} >
                                    <Card.Text style={{ fontSize: "25px" }}>
                                        {this.props.title}</Card.Text>
                                    <Card.Text style={{ fontSize: "15px" }}>
                                        {this.props.subTitle}</Card.Text>
                                    <Card.Text style={{ color: "yellow", marginBottom:"0px"}}>
                                        <b>{this.props.author} </b></Card.Text>
                                    <Card.Text>
                                        {this.props.info}</Card.Text>
                                </div>
                            </Card>
                    </Col>


                    <Col style={{marginLeft:"0px", paddingLeft:"0px"}}>     
                        <Card className="bg-light text-dark" style={{paddingRight:"0px"}}>
                                <Card.Img src={this.props.urlLink} alt="Card image" style={{ width: "800px",
                                                                                            height: "300px", 
                                                                                    objectFit: "Cover" }} />
                                </Card>
                    </Col>
                </Row>
                        
                        
                   
            </div>
        )
    }
}
