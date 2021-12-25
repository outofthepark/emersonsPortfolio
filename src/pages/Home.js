import React from 'react';
import profilePhoto from '../images/emersonsProfileSquare.png';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home() {
    return <Container className="m-5">
    <Row>
            <Col md="auto"><Image src={profilePhoto} alt="Emerson Oligschlaeger" roundedCircle className="m-1"/></Col>
            <Col className="d-flex align-items-center ">
                <p className="m-1">Emerson Oligschlaeger is a community journalist based in Salt Lake City, Utah. 
                A University of Utah graduate, Emerson currently works as an Assignment Editor for 
                the KSL/Deseret Media Corporation Combined Newsroom and as a freelance arts and culture 
                journalist. Their work has appeared in The Deseret News, Salt Lake City Weekly, KSL.com, 
                Scorpius Magazine, and the award-winning Voices of Utah blog. Emerson received a regional 
                Mark of Excellence award from the Society of Professional Journalists for their coverage 
                of the 2014 University of Utah fight song debate for the Daily Utah Chronicle. They 
                enjoy live music, solo travel, and writing in their journal.</p>
                </Col>
        </Row>
    </Container>;
}

export default Home;