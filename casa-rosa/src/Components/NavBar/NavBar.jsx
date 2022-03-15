
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'

function NavBar( {children} ) {
  console.log(children)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <NavDropdown title="Gines" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Lupulo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Lavanda</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Aji Calchaqui</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"> Usuarios </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <CartWidget />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar