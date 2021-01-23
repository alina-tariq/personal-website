import React from 'react'
import {Nav, Navbar} from '../../../node_modules/react-bootstrap';
import Logo from '../../assets/img/favicon.png'
//import {BrowserRouter as Router, Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" className="navbar" variant="light" fixed="top">
            <Navbar.Brand href="#home">
                <img src={Logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggleicon" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navcollapse">
                    <Nav.Link href="#" className="navlinks">
                        About
                    </Nav.Link>
                    <Nav.Link href="#" className="navlinks">
                        Resume
                    </Nav.Link>
                    <Nav.Link href="#" className="navlinks">
                        Projects
                    </Nav.Link>
                    <Nav.Link href="#" className="navlinks">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
