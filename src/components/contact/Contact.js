import React, { useState, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
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
                    <h2>If you'd prefer to contact me through other means, feel free to reach out on LinkedIn!</h2>
                    <div className="contact-content">
                        <div id="cat">
                            <img src={Kitty} alt="kitty" id="heading-cat" />
                        </div>
                        <div id="form">
                            {success && (
                                <div>
                                    <h2 id="contact-form">Thanks for your message!</h2>
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
                                    <button id="submit-button" type="submit">
                                    Submit
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </Col >
            </Row >
        </Container >
    )
}

export default Contact
