import React, {Component} from 'react';
import {Container, Nav, Navbar, Button, Image} from 'react-bootstrap';
import { ReactComponent as Icon} from './magnifying-glass.svg';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import './App.css';
import Drop from './components/DropDownProfile';





export default class Header extends Component {
    render () {
        return (
            <React.Fragment>
                <Container style={{paddingTop:"0px", marginTop:"0px"}}>
                    <Navbar style={{height:"76px"}} bg = "light" variant ="dark">
                        <Navbar style={{marginRight:"600px"}} className="medium">
                            <Navbar.Brand href="/Home">
                                <h1 style={{
                                    fontSize:"30px",
                                    color:"Black",
                                    fontFamily:"bold-content-sans-serif-font",
                                    marginLeft:"20px",
                                    paddingTop:"10px",
                                    marginTop:"0px"
                                    }}><b>Medium</b>
                                </h1>
                            </Navbar.Brand>
                        </Navbar>
                        <Drop />
                        < Navbar clasName="icon" className="icon" inline>
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
                        </Navbar>
                </Navbar>
                </Container>
            </React.Fragment>
        )
    }
}