import React from 'react';
import { Container, Row, Col,Tooltip,OverlayTrigger } from '../../../node_modules/react-bootstrap';
import Coding from '../../assets/img/coding.png';
import Library from '../../assets/img/library.png';
import Crochet from '../../assets/img/crochet.png';
import Travel from '../../assets/img/travel.png';
import Netflix from '../../assets/img/netflix.png';
import Raptors from '../../assets/img/raptors.png';
import kitty from '../../assets/img/1stcat.png'; 

const coding = (props) => (
    <Tooltip id="overlay" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum.
    </Tooltip>
);

const crochet = (props) => (
    <Tooltip id="overlay" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum.
    </Tooltip>
);

const library = (props) => (
    <Tooltip id="overlay" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum.
    </Tooltip>
);

const travel = (props) => (
    <Tooltip id="overlay" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum.
    </Tooltip>
);

const netflix = (props) => (
    <Tooltip id="overlay" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum.
    </Tooltip>
);

const raptors = (props) => (
    <Tooltip id="overlay" {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum.
    </Tooltip>
);

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="about">
                        {/*sm screens*/}
                        <div id="text" className="d-md-none d-sm-block">
                            <img src={kitty} alt="kitty" id="heading-cat" />
                            <h1 id="heading-text">About Me</h1>
                            <br />
                            <br />
                            <h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum. Mauris ultricies mi mauris, vel sollicitudin est aliquet vel. Donec lorem ante, tempus eu elit ac, lobortis volutpat lacus. Integer ac purus et velit molestie vulputate et quis est. Sed condimentum odio turpis, vitae accumsan purus maximus eu. Integer feugiat venenatis eleifend. Etiam pretium sodales eros, ut feugiat quam. Donec dignissim varius ipsum eu egestas. Mauris tempus elit vitae erat rutrum, vitae imperdiet urna faucibus. Nulla vitae fermentum elit. Fusce pretium ligula a dolor pellentesque scelerisque. Sed finibus est eget sagittis interdum. Nulla tincidunt enim sed efficitur viverra. Curabitur id malesuada diam.

                                Sed ante ligula, fringilla dictum orci eu, interdum placerat velit. Vestibulum vestibulum metus ac nisi finibus pharetra. Vivamus in erat et purus posuere vulputate. Morbi vel ligula vitae tellus condimentum auctor. Nunc ut arcu ac diam rhoncus dignissim. In eget sem dictum leo maximus consectetur. Etiam consectetur auctor interdum. Mauris ac ex mi.
                            </h2>
                        </div>

                        {/*med screens*/}
                        <div id="text" className="d-none d-md-block d-lg-none">
                            <div className="heading">
                                <img src={kitty} alt="kitty" id="heading-cat" />
                                <h1 id="heading-text">About Me</h1>
                            </div>
                            <br />
                            <br />
                            <h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum. Mauris ultricies mi mauris, vel sollicitudin est aliquet vel. Donec lorem ante, tempus eu elit ac, lobortis volutpat lacus. Integer ac purus et velit molestie vulputate et quis est. Sed condimentum odio turpis, vitae accumsan purus maximus eu. Integer feugiat venenatis eleifend. Etiam pretium sodales eros, ut feugiat quam. Donec dignissim varius ipsum eu egestas. Mauris tempus elit vitae erat rutrum, vitae imperdiet urna faucibus. Nulla vitae fermentum elit. Fusce pretium ligula a dolor pellentesque scelerisque. Sed finibus est eget sagittis interdum. Nulla tincidunt enim sed efficitur viverra. Curabitur id malesuada diam.

                                Sed ante ligula, fringilla dictum orci eu, interdum placerat velit. Vestibulum vestibulum metus ac nisi finibus pharetra. Vivamus in erat et purus posuere vulputate. Morbi vel ligula vitae tellus condimentum auctor. Nunc ut arcu ac diam rhoncus dignissim. In eget sem dictum leo maximus consectetur. Etiam consectetur auctor interdum. Mauris ac ex mi.
                                </h2>
                        </div>

                        <div className="d-none d-md-block d-lg-none">
                            <div className="first">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={coding}
                                    >
                                <img src={Coding} alt="coding" />
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={crochet}
                                    >
                                <img src={Crochet} alt="crochet"/>
                                </OverlayTrigger>
                            </div>

                            <div>
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={library}
                                    >
                                    <img src={Library} alt="library" />
                                </OverlayTrigger>

                                <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 150, hide: 400 }}
                                            overlay={netflix}
                                            >
                                            <img src={Netflix} alt="netflix" />
                                </OverlayTrigger>
                            </div>

                            <div className="first">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={raptors}
                                    >
                                    <img src={Raptors} alt="raptors" />
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={travel}
                                    >
                                    <img src={Travel} alt="travel" />
                                </OverlayTrigger>
                            </div>
                        </div>

                        {/*lg screens*/}
                        <div id="text" className="d-none d-lg-block d-xl-none">
                            <img src={kitty} alt="kitty" id="heading-cat" />
                            <h1 id="heading-text">About Me</h1>
                            <br />
                            <br />
                            <h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum. Mauris ultricies mi mauris, vel sollicitudin est aliquet vel. Donec lorem ante, tempus eu elit ac, lobortis volutpat lacus. Integer ac purus et velit molestie vulputate et quis est. Sed condimentum odio turpis, vitae accumsan purus maximus eu. Integer feugiat venenatis eleifend. Etiam pretium sodales eros, ut feugiat quam. Donec dignissim varius ipsum eu egestas. Mauris tempus elit vitae erat rutrum, vitae imperdiet urna faucibus. Nulla vitae fermentum elit. Fusce pretium ligula a dolor pellentesque scelerisque. Sed finibus est eget sagittis interdum. Nulla tincidunt enim sed efficitur viverra. Curabitur id malesuada diam.

                                Sed ante ligula, fringilla dictum orci eu, interdum placerat velit. Vestibulum vestibulum metus ac nisi finibus pharetra. Vivamus in erat et purus posuere vulputate. Morbi vel ligula vitae tellus condimentum auctor. Nunc ut arcu ac diam rhoncus dignissim. In eget sem dictum leo maximus consectetur. Etiam consectetur auctor interdum. Mauris ac ex mi.
                            </h2>
                        </div>

                        <div className="d-none d-lg-block d-xl-none">
                            <div className="first">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={coding}
                                    >
                                <img src={Coding} alt="coding" />
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={crochet}
                                    >
                                <img src={Crochet} alt="crochet"/>
                                </OverlayTrigger>
                            </div>

                            <div>
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={library}
                                    >
                                    <img src={Library} alt="library" />
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={netflix}
                                    >
                                    <img src={Netflix} alt="netflix" />
                                </OverlayTrigger>
                            </div>

                            <div className="first">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={travel}
                                    >
                                    <img src={Travel} alt="travel" />
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={raptors}
                                    >
                                    <img src={Raptors} alt="raptors" />
                                </OverlayTrigger>
                            </div>
                        </div>

                        {/* xl screens */}
                        <div id="text" className="d-none d-xl-block">
                            <img src={kitty} alt="kitty" id="heading-cat" />
                            <h1 id="heading-text">About Me</h1>
                            <br />
                            <br />
                            <h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ex gravida mi gravida dictum. Mauris ultricies mi mauris, vel sollicitudin est aliquet vel. Donec lorem ante, tempus eu elit ac, lobortis volutpat lacus. Integer ac purus et velit molestie vulputate et quis est. Sed condimentum odio turpis, vitae accumsan purus maximus eu. Integer feugiat venenatis eleifend. Etiam pretium sodales eros, ut feugiat quam. Donec dignissim varius ipsum eu egestas. Mauris tempus elit vitae erat rutrum, vitae imperdiet urna faucibus. Nulla vitae fermentum elit. Fusce pretium ligula a dolor pellentesque scelerisque. Sed finibus est eget sagittis interdum. Nulla tincidunt enim sed efficitur viverra. Curabitur id malesuada diam.

                                Sed ante ligula, fringilla dictum orci eu, interdum placerat velit. Vestibulum vestibulum metus ac nisi finibus pharetra. Vivamus in erat et purus posuere vulputate. Morbi vel ligula vitae tellus condimentum auctor. Nunc ut arcu ac diam rhoncus dignissim. In eget sem dictum leo maximus consectetur. Etiam consectetur auctor interdum. Mauris ac ex mi.
                            </h2>
                        </div>

                        <div className="d-none d-xl-block">
                            <div id="firstrow">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={netflix}
                                    >
                                    <img src={Netflix} alt="netflix" />
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
                            <div id="secondrow">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={travel}
                                    >
                                    <img src={Travel} alt="travel" />
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={coding}
                                    >
                                <img src={Coding} alt="coding" />
                                </OverlayTrigger>
                            </div>
                            <div id="thirdrow">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 150, hide: 400 }}
                                    overlay={raptors}
                                    >
                                    <img src={Raptors} alt="raptors" />
                                </OverlayTrigger>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About