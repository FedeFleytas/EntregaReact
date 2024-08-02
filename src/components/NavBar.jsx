import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



import { CartWidget } from "./CartWidget"

export const NavBar = () => (

    
    <>
        <Navbar data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className='name'>TechNow</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/Procesadores">Procesadores</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/Videos">Placas de video</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </> 
)