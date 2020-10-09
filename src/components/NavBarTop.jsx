import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const NavBarTop = () =>{

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Super Todo</Navbar.Brand>
            <Nav className="mr-auto">
            
            <Link className="nav-link" to='/' >Inicio</Link>
            <Link className="nav-link" to='/mis-tareas' >Mis tareas</Link>
            <Link className="nav-link" to='/tareas' >Tareas</Link>
            
            
            
            {/* 
            <Nav.Link href="#mis-tareas">Mi tareas</Nav.Link>
            <Nav.Link href="#tareas">Tareas</Nav.Link>
            <Nav.Link href="#mis-tareas">Soy Bootstrap</Nav.Link>*/}

            </Nav>
        </Navbar>

    )

}

export default NavBarTop;
