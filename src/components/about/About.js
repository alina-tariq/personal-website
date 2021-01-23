import React from 'react';
import {Container,Row,Col} from '../../../node_modules/react-bootstrap';
import MyPicture from '../../assets/img/meicon.png';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="about">
                        <h1>Hello</h1>
                        <img
                            src={MyPicture}
                            alt="me"
                            id="myPic"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About