import React, { useState } from 'react'
import { Container, Row, Col, Form,} from 'react-bootstrap';
import Kitty from '../../assets/img/lettercat.png';
import NetlifyForm from 'react-ssg-netlify-forms'

const Contact = () => {

    // Post-Submit Navigate
    const postSubmit = () => {
        alert('hooray');
    }

    // Simple controlled form setup (Control your own state)
    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

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
                            <NetlifyForm formName="contact" formValues={formValues} postSubmit={postSubmit} >
                            <Form name="contact" method="post">
                                <Form.Group>
                                    <Form.Label className="label">Name</Form.Label>
                                    <input type="text" name="name" value={formValues.name} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Email address</Form.Label>
                                    <input type="email" name="email" value={formValues.email} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Subject</Form.Label>
                                    <input type="text" name="subject" value={formValues.subject} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="label">Your message</Form.Label>
                                    <textarea name="message" value={formValues.message} onChange={handleChange} required />
                                </Form.Group>
                                <button type="submit">Send</button>
                            </Form>
                            </NetlifyForm>
                        </div>
                    </div>
                </Col >
            </Row >
        </Container >
    )
}

export default Contact
