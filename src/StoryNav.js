import React, { Component } from 'react';
import Story from './Story';
import { Card, Nav, Container } from 'react-bootstrap';
import StoryNavDraft from './StoryNavDraft';

export default class StoryNav extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <Story />
                </div>
                <div>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="/story_nav_draft">Draft</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/published">Published</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
                )
            }
        }
