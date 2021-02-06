import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import About from './about'
import ProfessionalProjects from './professionalProjects'
import PersonalProjects from './personalProjects'
import Work from './work'

import { SocialIcon } from 'react-social-icons';

const Layout = () => {
    return (
        <Container className='page-bg'>
            <Row>
                <Col>
                    <About />
                </Col>
            </Row>
            <Row>
                <Col className='first-bg'>
                    <ProfessionalProjects />
                </Col>
            </Row>
            <Row>
                <Col className='second-bg'>
                    <Work />
                </Col>
            </Row>
            <Row>
                <Col className='first-bg'>
                    <PersonalProjects />
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'end'}}>
                        <SocialIcon bgColor='#f4f4f8' style={{marginTop: '5px', marginBottom: '5px', width: '30px', height: '30px'}} url="https://github.com/Anddii" />
                        <SocialIcon bgColor='#f4f4f8' style={{marginLeft: '5px', marginTop: '5px', marginBottom: '5px', width: '30px', height: '30px'}} url="https://www.linkedin.com/in/antti-kytoe/" />
                </Col>
            </Row>
        </Container >
    )
}

export default Layout