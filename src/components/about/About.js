import React from 'react';
import {Container,Row,Col} from '../../../node_modules/react-bootstrap';
import MyPicture from '../../assets/img/meicon.png';

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="main">
                        <img src={MyPicture} alt="mypic"/> 
                        <br />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About