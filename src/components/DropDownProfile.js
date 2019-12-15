import React, { Component } from 'react';
import { Dropdown, DropdownButton, Nav, Button, Image, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class DropDownProfile extends Component {
    render() {
        const trigger = (
            <span>
                <Image src = "https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" />
            </span>
        )
        return (

            <DropdownButton 
                trigger={trigger} alignRight id="loader" title="Profile" >
                <div className="dropdown-menu-right" style={{width:"200px", overflow:"scroll"}}>
                    <Dropdown.Item as="block" >
                        <Row >
                            <Col>
                                <Image src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" style={{ width: "50px", borderRadius: "50%" }} />
                            </Col>
                            <Col>
                                Dimas Aji Wicakasono <br />
                                @dimasajiwicaksono
                            </Col>
                        </Row>

                    </Dropdown.Item >
                    <Dropdown.Item as="button" style={{textDecoration:"none"}}> Become Member</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button" style={{textDecoration:"none"}}> New Story</Dropdown.Item>
                    <Link to ="./story" style={{textDecoration:"none"}}> <Dropdown.Item as="button"> Stories</Dropdown.Item> </Link>
                    <Dropdown.Item as="button"style={{textDecoration:"none"}}>Stat</Dropdown.Item>
                    <Dropdown.Divider />
                    <Link to='/bookmark'style={{textDecoration:"none"}}> <Dropdown.Item as="button"> Bookmarks</Dropdown.Item></Link>
                    <Dropdown.Item as="button"style={{textDecoration:"none"}}> Profile</Dropdown.Item>
                    <Dropdown.Item as="button"style={{textDecoration:"none"}}>Setting</Dropdown.Item>
                    <Dropdown.Item as="button"style={{textDecoration:"none"}}>Help</Dropdown.Item>
                    <Link to='/login'> <Dropdown.Item as="button"style={{textDecoration:"none"}}>Sign Out</Dropdown.Item></Link>
                </div>
            </DropdownButton>
        )
    }
}