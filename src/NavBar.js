import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';




class NavBar extends Component {
   render(){
      return (

<Navbar bg="dark" variant="dark" expand="md">
     <Container>
    <Navbar.Brand>ARUNEEMA DESHMUKH </Navbar.Brand>
     </Container>
     <Container>
    <Nav className="ml-auto">
      <Nav.Link href="#home"> Home </Nav.Link>
      <Nav.Link href="#projects"> Projects </Nav.Link>
      <Nav.Link href="#connect"> Connect </Nav.Link>
    </Nav>
     </Container>
  
  <Navbar.Collapse>
  </Navbar.Collapse>
</Navbar>
  );
 }
}

export default NavBar;