import React from 'react'
import {Nav, Navbar} from '../../../node_modules/react-bootstrap';
import Logo from '../../assets/img/favicon.png'
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

const ScrollLink = Scroll.Link;

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" className="navbar" variant="dark" fixed="top">
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    alt="logo"
                    onClick={scroll.scrollToTop}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggleicon" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navcollapse">
                    <ScrollLink 
                        to="/about"
                        smooth={true} 
                        duration={500}
                    >
                        <Nav.Link className="navlinks">
                            About
                        </Nav.Link>
                    </ScrollLink>
                    {/*
                    <ScrollLink 
                        to="/resume"
                        smooth={true} 
                        duration={500}
                    >
                        <Nav.Link className="navlinks">
                            Resume
                        </Nav.Link>
                    </ScrollLink>
                    */}
                    <ScrollLink 
                        to="/projects"
                        smooth={true} 
                        duration={500}
                    >
                        <Nav.Link className="navlinks">
                            Projects
                        </Nav.Link>
                    </ScrollLink>
                    <ScrollLink 
                        to="/contact"
                        smooth={true} 
                        duration={500}
                    >
                        <Nav.Link className="navlinks">
                            Contact
                        </Nav.Link>
                    </ScrollLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
