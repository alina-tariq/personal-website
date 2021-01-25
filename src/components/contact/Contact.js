import React from 'react'
import { Container, Row, Col,Form,Button } from '../../../node_modules/react-bootstrap';
import Kitty from '../../assets/img/lettercat.png';

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="contact">
                    <h1>Contact Me</h1>
                    <div className="contact-content">
                        <div id="cat">
                            <img src={Kitty} alt="kitty" id="heading-cat" />
                        </div>
                        <form name="contact" method="post">
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label>Your Name: <input type="text" name="name"/></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email"/></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                        {/*<div id="form">
                            <Form name="contact" method="post">
                                <input type="hidden" name="form-name" value="the-name-of-the-html-form" />
                                <Form.Group>
                                    <Form.Label className="label">Name</Form.Label>
                                    <Form.Control className="fields" type="text" name="name" placeholder="Jane Smith" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Email address</Form.Label>
                                    <Form.Control className="fields" type="email" name="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Subject</Form.Label>
                                    <Form.Control className="fields" type="text" name="subject" placeholder="Subject" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Your message</Form.Label>
                                    <Form.Control as="textarea" name="message" id="message" />
                                </Form.Group>
                                <Button variant="alert" id="submit-button" type="submit">
                                Submit
                                </Button>
                            </Form>
                        </div>*/}
                    </div>
                </Col >
            </Row >
        </Container >
    )
}

export default Contact
