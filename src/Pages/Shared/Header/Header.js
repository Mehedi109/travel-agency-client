import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link to="/home" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link to="/" as={Link}>
                {user.displayName}
              </Nav.Link>
              {user.email ? (
                <>
                  <Button onClick={logOut}>Logout</Button>
                  <Nav.Link to="/dashboard" as={Link}>
                    Dashboard
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link to="/login" as={Link}>
                  Login
                </Nav.Link>
              )}
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
