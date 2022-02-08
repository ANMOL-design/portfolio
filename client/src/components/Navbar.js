import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FiAward } from "react-icons/fi";


function NavBar() {

  const navigate = useNavigate();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const navigatetohireme = () => {
    navigate("/Hireme")
  }

  window.addEventListener("scroll", scrollHandler);

  return (
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
       
        <Navbar.Brand style={{alignItems: "center"}}>
          <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
            <h3 style={{color:"#c770f0",fontFamily:"cursive"}}>Anmol Garg.</h3>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

      <Container id="containerofnavbar">
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: "flex-end"}}>
          <Nav className="ml-auto onsmallnavbar" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="marginnavbar">
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="marginnavbar">
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="marginnavbar">
              <Nav.Link
                as={Link}
                to="/certification"
                onClick={() => updateExpanded(false)}
              >
                <FiAward style={{ marginBottom: "2px"}} /> Certificate
              </Nav.Link>
            </Nav.Item>

            <Nav.Item id="marginnavbar">
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn" onClick={() => navigatetohireme()}>
              <Button
                target="_blank"
                className="fork-btn-inner"
              >
             <i className='fas fa-handshake'></i> Hire me
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
