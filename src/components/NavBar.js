import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
    return <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="/">Emerson Oligschlaeger</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>;
}

export default NavBar;