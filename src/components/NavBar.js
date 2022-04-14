import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import {NAME_APP} from "../app/const";
import React from "react";

export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{NAME_APP}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <NavDropdown title="Gestion" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/gestion/service">Service</NavDropdown.Item>
                            <NavDropdown.Item href="/gestion/chambre">Chambre</NavDropdown.Item>
                            <NavDropdown.Item href="/gestion/role">Role</NavDropdown.Item>
                            <NavDropdown.Item href="/gestion/option">Option</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}