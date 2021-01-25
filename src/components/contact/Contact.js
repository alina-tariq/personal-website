import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../../node_modules/react-bootstrap';
import Kitty from '../../assets/img/lettercat.png';

const Contact = () => {

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true);
        }
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col className="contact">
                    <h1>Contact Me</h1>
                    <div className="contact-content">
                        <div id="cat">
                            <img src={Kitty} alt="kitty" id="heading-cat" />
                        </div>
                        <div id="form">
                            {success && (
                                <p style={{ color: "green" }}>Thanks for your message! </p>
                            )}
                            <form name="contact" method="post" action="/?success=true"
                                data-netlify="true">
                                <input type="hidden" name="form-name" value="the-name-of-the-html-form" />
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
                                <button id="submit-button" type="submit">
                                Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </Col >
            </Row >
        </Container >
    )
}

export default Contact
