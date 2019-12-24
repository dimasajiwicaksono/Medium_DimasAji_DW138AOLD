import React, {Component} from 'react';
import {Container, Nav, Navbar, Dropdown, Button, Image, MenuItem} from 'react-bootstrap';
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
                        
                        < Navbar clasName="icon" className="icon" inline>
                            <div className="Button">
                                <span> <Button variant="outline-dark" type="submit"style={{marginRight:"20px"}}>Upgrade</Button></span>
                            </div>
                            <Drop />
                        </Navbar>
                </Navbar>
                </Container>
            </React.Fragment>
        )
    }
}