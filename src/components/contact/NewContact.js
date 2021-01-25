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
                    <div className="contact-content">
                        <div id="cat">
                            <img src={Kitty} alt="kitty" id="heading-cat" />
                        </div>
                        <div>
                            {success && (
                                <p style={{ color: "green" }}>Thanks for your message! </p>
                            )}
                            <form
                                name="contact"
                                method="POST"
                                action="/?success=true"
                                data-netlify="true"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p>
                                    <label>Names: </label>
                                    <input type="text" label="name" name="name" />
                                </p>
                                <p>
                                    <label>Email:</label>
                                    <input type="email" label="email" name="email" />
                                </p>
                                <p>
                                    <label>Message:</label>
                                    <input type="textarea" label="message" name="message" />
                                </p>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </Col >
            </Row >
        </Container >
    )
}

export default Contact
