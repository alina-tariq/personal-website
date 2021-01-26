import React from 'react';
import Cat from '../../assets/img/curled.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';

const Projects = () => {
    return (
        <div>
            <Element id='/projects' name='/projects'>
                <Container fluid>
                    <Row>
                        <Col className="projects">
                            <div className="heading">
                                <img src={Cat} alt="cat" id="heading-cat" />
                                <h1 id="heading-text">Projects</h1>
                            </div>
                            <div className="projects-content">

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Element>
        </div>
    )
}

export default Projects
