import React from 'react';
import MyPicture from '../../assets/img/meicon.png';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container,Row,Col} from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="main">
                        <div id="header">
                            <img src={MyPicture} alt="mypic" id="mainimg" /> 
                            <br />
                            <h1 id="name">ALINA TARIQ</h1>
                            <div id="namelinks">
                                <a href="https://www.linkedin.com/in/alinatariq/">
                                    <FontAwesomeIcon icon={faLinkedin} id="links"/>
                                </a>
                                <a href="https://github.com/alina-tariq">
                                    <FontAwesomeIcon icon={faGithub} id="links"/>
                                </a>
                                <a href="mailto:alina.tariq@ryerson.ca">
                                    <FontAwesomeIcon icon={faEnvelope} id="links"/>
                                </a>
                            </div>
                            <h2 id="tagline">CS Student with Background in Neuroscience</h2>
                            <br />
                            <div id="container">    
                                <div id="spin" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
