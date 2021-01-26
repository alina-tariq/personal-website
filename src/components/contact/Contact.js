import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Kitty from '../../assets/img/lettercat.png';
import { Element } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

const Contact = () => {

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true);
        }
    }, []);

    return (
        <div>
            <Element id='/contact' name='/contact'>
                <Container fluid>
                    <Row>
                        <Col className="contact">
                            <h1>Contact Me</h1>
                            <h2>
                                Fill out the form below to get in touch with me!
                                If you'd prefer to contact me through other means,
                                you can also reach out and connect with me on&nbsp;
                                <a href="https://www.linkedin.com/in/alinatariq/">LinkedIn</a>!
                            </h2>
                            <div className="contact-content">
                                <div id="cat">
                                    <img src={Kitty} alt="kitty" id="heading-cat" />
                                </div>
                                <div id="form">
                                    {success && (
                                        <div id="greeting">
                                            <h2 id="contact-form">
                                                Thanks for your message! <br />
                                                I'll be sure to get back to you soon!
                                            </h2>
                                        </div>
                                    )}
                                    {!success && (
                                        <form
                                            name="contact"
                                            method="POST"
                                            action="/?success=true"
                                            data-netlify="true"
                                        >
                                            <input type="hidden" name="form-name" value="contact" />
                                            <div>
                                                <label className="label">Name</label>
                                                <br />
                                                <input className="fields" type="text" name="name" placeholder="Jane Smith" />
                                            </div>
                                            <div>
                                                <label className="label">Email address</label>
                                                <br />
                                                <input className="fields" type="email" name="email" placeholder="name@example.com" />
                                            </div>
                                            <div>
                                                <label className="label">Subject</label>
                                                <br />
                                                <input className="fields" type="text" name="subject" placeholder="Subject" />
                                            </div>
                                            <div>
                                                <label className="label">Your message</label>
                                                <br />
                                                <input type="textarea" name="message" id="message" />
                                            </div>
                                            <br />
                                            <button id="submit-button" onClick={scroll.scrollToBottom} type="submit">
                                                Submit
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </Col >
                    </Row >
                </Container >
            </Element>
        </div>
    )
}

export default Contact
