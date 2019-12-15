import React, { Component } from 'react';
import { Dropdown, DropdownButton, Nav, Button, Image, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class DropDownProfile extends Component {
    render() {
        return (

            // <DropdownButton alignRight id="dropdown-menu-align-right" title="cek" >
            //     <Dropdown.Item as="button">Biografi </Dropdown.Item>
            //     <Dropdown.Divider />
            //     <Dropdown.Item as="button"></Dropdown.Item>
            //     <Dropdown.Item as="button"> Cek</Dropdown.Item>
            //     <Dropdown.Divider />
            //     <Dropdown.Item as="button">Sign In</Dropdown.Item>
            // </DropdownButton>


           
            <DropdownButton as="Image" alignRight id="loader" title="Profile" >
                <div className="dropdown-menu-right" style={{width:"200px", overflow:"scroll"}}>
                    <Dropdown.Item as="block">
                        <Row >
                            <Col>
                                <Image src="https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg" style={{ width: "50px", borderRadius: "50%" }} />
                            </Col>
                            <Col>
                                Dimas Aji Wicakasono <br />
                                @dimasajiwicaksono
                            </Col>
                        </Row>

                    </Dropdown.Item>
                    <Dropdown.Item as="button"> Become Member</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button"> New Story</Dropdown.Item>
                    <Dropdown.Item as="button"> Stories</Dropdown.Item>
                    <Dropdown.Item as="button">Stat</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button"> Bookmarks</Dropdown.Item>
                    <Dropdown.Item as="button"> Profile</Dropdown.Item>
                    <Dropdown.Item as="button">Setting</Dropdown.Item>
                    <Dropdown.Item as="button">Help</Dropdown.Item>
                   <Link to='/home'> <Dropdown.Item as="button">Sign Out</Dropdown.Item></Link>
                </div>
            </DropdownButton>
           
        )
    }
}
