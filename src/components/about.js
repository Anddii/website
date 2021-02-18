import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <Container style={{paddingTop: '200px', paddingBottom: '400px'}}>
            <Row>
                <Col>
                    <h2 class="text-white">Antti Kytö</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p class="text-white">Currenty working at the MTV Oy as a System Specialist. Interested in backend- and game development. Available for freelance work.</p>
                    <p class="text-white">💚💚💚</p>
                </Col>
            </Row>
        </Container >
    )
}

export default About