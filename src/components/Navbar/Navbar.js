import { Navbar, Nav, Offcanvas, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { animateScroll as scroll } from 'react-scroll'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import './Navbar.css';

import {
    Navb,
    NavLinks,
    NavLogo,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const NavbarComp = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <Navbar sticky="top" bg="dark" expand={false}>
            <Container fluid>
                <NavLogo to='/pokedexgo' onClick={toggleHome}>Pokedex Go</NavLogo>

                <NavDropdown className='flex-grow-1 pt-1' title="Pokemons" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                </NavDropdown>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Offcanvas
                    className="sidebar"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Pokedex Go</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLinks to='../pokedexgo'>Home</NavLinks>
                            <NavLinks to='../pokemon'>Pokemons</NavLinks>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}


export default NavbarComp