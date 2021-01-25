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
                        <div id="form">
                            <Form name="contact" method="POST">
                                <input type="hidden" name="form-name" value="the-name-of-the-html-form" />
                                <Form.Group>
                                    <Form.Label className="label">Name</Form.Label>
                                    <Form.Control className="fields" type="text" placeholder="Jane Smith" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Email address</Form.Label>
                                    <Form.Control className="fields" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Subject</Form.Label>
                                    <Form.Control className="fields" type="text" placeholder="Subject" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Your message</Form.Label>
                                    <Form.Control as="textarea" id="message" />
                                </Form.Group>
                                <Button variant="alert" id="submit-button" type="submit">
                                Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col >
            </Row >
        </Container >
    )
}

export default Contact
