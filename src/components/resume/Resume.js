import React from 'react';
import Cat from '../../assets/img/pawcat.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';

const Resume = () => {
    return (
        <div>
            <Element id='/resume' name='/resume'>
                <Container fluid>
                    <Row>
                        <Col className="resume">
                            <div className="heading">
                                <img src={Cat} alt="cat" id="heading-cat" />
                                <h1 id="heading-text">Resume</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Element>
        </div>
    )
}

export default Resume
