import React from 'react';
import Cat from '../../assets/img/curled.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MindTrack from '../../assets/img/mindtrack.png';
import Mastermind from '../../assets/img/mastermind.png';
import Crossword from '../../assets/img/crossword.png';
import Website from '../../assets/img/website.png';
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
                                <Card id="cards">
                                    <Card.Img variant="top" src={Website}/>
                                    <Card.Body id="card-text">
                                        <Card.Title>
                                            <a href="https://github.com/alina-tariq/personal-website">
                                                <h1>Personal Website</h1>
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                                <h4>React.js, React Bootstrap</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card id="cards">
                                    <Card.Img variant="top" src={MindTrack}/>
                                    <Card.Body id="card-text">
                                        <Card.Title>
                                            <a href="https://github.com/alina-tariq/mindtrack">
                                                <h1>MindTrack</h1>
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                                <h4>HTML, CSS, JavaScript, PHP, SQL</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card id="cards">
                                    <Card.Img variant="top" src={Mastermind}/>
                                    <Card.Body id="card-text">
                                        <Card.Title>
                                            <a href="https://github.com/alina-tariq/mastermind">
                                                <h1>Mastermind</h1>
                                            </a>
                                        </Card.Title>
                                        <Card.Text>
                                                <h4>Python</h4>
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card id="cards">
                                    <Card.Img variant="top" src={Crossword}/>
                                    <Card.Body id="card-text">
                                        <Card.Title>
                                            <a href="https://github.com/alina-tariq/crossword-creator">
                                                <h1>Crossword Creator</h1>
                                            </a>
                                            <Card.Text>
                                                <h4>Python</h4>
                                            </Card.Text>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Element>
        </div>
    )
}

export default Projects
