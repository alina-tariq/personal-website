import React from 'react';
import { Container, Row, Col, Tooltip, OverlayTrigger } from '../../../node_modules/react-bootstrap';
import Escape from '../../assets/img/mystery.png';
import Library from '../../assets/img/library.png';
import Crochet from '../../assets/img/crochet.png';
import Travel from '../../assets/img/travel.png';
import Netflix from '../../assets/img/netflix.png';
import Raptors from '../../assets/img/raptors.png';
import Kitty from '../../assets/img/1stcat.png';
import { Element } from 'react-scroll';

const escape = (props) => (
    <Tooltip id="overlay" {...props}>
        I absolute love escape rooms! One of my favourites was a completely dark escape room where you had to rely entirely on your other senses to try and escape.
    </Tooltip>
);

const crochet = (props) => (
    <Tooltip id="overlay" {...props}>
        Crocheting was a quarantine hobby and I didn't expect to enjoy or stick with it for as long as I have. It's a fun, creative outlet, and my current goal is to make a quilt! 
    </Tooltip>
);

const library = (props) => (
    <Tooltip id="overlay" {...props}>
        This should go without saying, really, but I love to learn! The subject isn't particularly important, though I really enjoy learning about the arts!
    </Tooltip>
);

const travel = (props) => (
    <Tooltip id="overlay" {...props}>
        I love travelling and exploring new cities! The pandemic has disrupted that, but I'm currently planning for a trip around Europe for after. 
    </Tooltip>
);

const netflix = (props) => (
    <Tooltip id="overlay" {...props}>
        I was never a TV/movie person, but a new set of coworkers can really change that about you. Some favourites of mine: Mindhunters, Kingdom (Korean), Burden of Truth.
    </Tooltip>
);

const raptors = (props) => (
    <Tooltip id="overlay" {...props}>
        Not really sure when/how this happened, probably around 2017, but while watching the games with my brother I also became a huge fan of our team! #WeTheNorth
    </Tooltip>
);

const About = () => {
    return (
        <div>
            <Element id='/about' name='/about'>
            <Container fluid>
                <Row>
                    <Col className="about">
                        <div className="heading">
                            <img src={Kitty} alt="kitty" id="heading-cat" />
                            <h1 id="heading-text">About Me</h1>
                        </div>
                        <div className="about-content">
                            <div id="text">
                                <br />
                                <br />
                                <h2>
                                    Hey there! My name’s Alina, I’m from Toronto, Canada, and I’m currently finishing up my 2nd year studying Computer Science at Ryerson University. I am an aspiring full-stack web developer, though I’ve recently also gained an interest in mobile/app development. I’ve worked on a couple small side projects that are listed below so do check those out.
                                    <br /> 
                                    <br /> 
                                    Aside from my love of Computer Science, I also have a background in Neuroscience. In relation to that, I currently work in neurological research at The Hospital for Sick Children (SickKids), where we examine semantic language (i.e. the meaning of words) in children with ASD.
                                    <br /> 
                                    <br /> 
                                    Outside of academics and work life, I do have a couple other interests that you can explore on this page. If you find we have something in common, feel free to reach out!
                                </h2>
                            </div>
                            
                            {/*xs screens*/}
                            <div id="circles-container" className="d-block d-sm-none">
                                <div>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={escape}
                                    >
                                        <img src={Escape} alt="escape room" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={crochet}
                                    >
                                        <img src={Crochet} alt="crochet" />
                                    </OverlayTrigger>
                                </div>

                                <div>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={library}
                                    >
                                        <img src={Library} alt="library" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={travel}
                                    >
                                        <img src={Travel} alt="travel" />
                                    </OverlayTrigger>
                                </div>

                                <div>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={raptors}
                                    >
                                        <img src={Raptors} alt="raptors" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={netflix}
                                    >
                                        <img src={Netflix} alt="tv" />
                                    </OverlayTrigger>
                                </div>
                            </div>

                            {/*md/lg screens*/}
                            <div id="circles-container" className="d-none d-md-block d-xl-none">
                                <div>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={escape}
                                    >
                                        <img src={Escape} alt="escape room" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={crochet}
                                    >
                                        <img src={Crochet} alt="crochet" />
                                    </OverlayTrigger>
                                </div>

                                <div>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={library}
                                    >
                                        <img src={Library} alt="library" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={travel}
                                    >
                                        <img src={Travel} alt="travel" />
                                    </OverlayTrigger>
                                </div>

                                <div>
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={raptors}
                                    >
                                        <img src={Raptors} alt="raptors" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={netflix}
                                    >
                                        <img src={Netflix} alt="tv" />
                                    </OverlayTrigger>
                                </div>
                            </div>

                            {/* sm/xl screens */}
                            <div id="circles-container" className="d-none d-sm-block d-md-none d-xl-block">
                                <div>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={escape}
                                    >
                                        <img src={Escape} alt="escape room" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={crochet}
                                    >
                                        <img src={Crochet} alt="crochet" />
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={library}
                                    >
                                        <img src={Library} alt="library" className="other" />
                                    </OverlayTrigger>
                                </div>
                                <div>
                                    <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={netflix}
                                    >
                                        <img src={Netflix} alt="tv" />
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={raptors}
                                    >
                                        <img src={Raptors} alt="raptors" />
                                    </OverlayTrigger>
                                </div>
                                <div>
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={travel}
                                    >
                                        <img src={Travel} alt="travel" />
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </Element>
        </div>
    )
}

export default About