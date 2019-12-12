// import React, {Component} from 'react';
// import {Nav, Navbar, Button} from 'react-bootstrap';



// export default class Category extends Component {
//     render () {
//     return (
//         <Navbar bg="light" style={{paddingRight:"2px", paddingLeft:"2px", marginTop:"0px"}}>
//             <Nav.Link style ={{height:"60px" }} href ="#home">{this.props.name}</Nav.Link>
//         </Navbar>
//     )
// }
// }

import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';

// list of items
const list = [
    { name: "HOME", url:'/Home' },
    { name: "ONEZERO", url:'/CategoryPage' },
    { name: "ELEMENTAL", url:'/' },
    { name: " GEN", url:'/' },
    { name: " ZORA", url:'/' },
    { name: " FORGE",url:'/' },
    { name: " HUMAN PARTS", url:'/' },
    { name: " LEVER", url:'/' },
    { name: " HEATED", url:'/' },
    { name: " MODUS", url:'/' },
    { name: " CEK", url:'/' },
    { name: " MORE", url:'/' }
]


// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return (
        <div className="menu-item">
            {text}
        </div>
    );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
    const { name } = el;

    return (
        <MenuItem
            text={name}
            key={name}
        />
    );
});


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export default class Category extends Component {
    state = {
        selected: 0
    };

    onSelect = key => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(list, selected);

        return (
            <div className="Category">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}