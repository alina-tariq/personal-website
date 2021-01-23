import React from 'react';
import MyPicture from '../../assets/img/meicon.png';
import {Container,Row,Col} from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="main">
                        <img src={MyPicture} alt="mypic"/> 
                        <br />
                        <h1 id="name">ALINA TARIQ</h1>
                        <br />
                        <div id="container">    
                            <span id="spin"></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
