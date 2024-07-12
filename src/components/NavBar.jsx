import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"

export const NavBar = () => (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className='name'>Dress Now</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Remeras</Nav.Link>
                <Nav.Link href="#features">Pantalones</Nav.Link>
                <Nav.Link href="#pricing">Buzos</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </> 
)