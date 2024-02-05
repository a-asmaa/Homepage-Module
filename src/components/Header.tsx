import { Button, Container, Form, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import logo from '../assets/Logo.png';
import Decore from '../assets/Decore.svg';
import '../styles/header.scss'

const Header = () => {
    return ( <header className="container">

        <img src={logo}  alt="logo"/>
        <img src={Decore}  alt="logo" className="decore"/>

        <Navbar collapseOnSelect expand='sm'>
            <Container >
                <Navbar.Toggle />
                <NavbarCollapse>
                    <Nav
                        activeKey="/home"
                    >
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="about">About us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="news">News</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contact">
                                Contact us
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="ms-4">
                            <Nav.Link eventKey="login">
                                login
                            </Nav.Link>
                        </Nav.Item>

                        <Button variant="outline-secondary">Sign up </Button>

                        <select className="mx-4">
                            <option value="en">En</option>
                            <option value="ar">Ar</option>
                        </select>

                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
       

    </header> );
}
 
export default Header;