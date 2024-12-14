import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="container-fluid mt-5" id="home">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand
            className="text"
            as={Link}
            to="home"
            style={{ cursor: "pointer" }}
          >
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"  "}
            Kingsukh Guest House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="gap-md-3 gap-lg-4 gap-2 text-center mx-auto">
              <Nav.Link
                as={Link}
                to="home"
                spy={true}
                activeClass="active"
                offset={-100}
                smooth={true}
                duration={50}
                className="custom-nav-link"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="about"
                spy={true}
                activeClass="active"
                offset={-67}
                smooth={true}
                duration={50}
                className="custom-nav-link"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="rooms"
                spy={true}
                activeClass="active"
                offset={-60}
                smooth={true}
                duration={50}
                className="custom-nav-link"
              >
                Rooms
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="services"
                spy={true}
                activeClass="active"
                offset={-70}
                smooth={true}
                duration={50}
                className="custom-nav-link"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="gallary"
                spy={true}
                activeClass="active"
                offset={-70}
                smooth={true}
                duration={50}
                className="custom-nav-link"
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="contact"
                spy={true}
                activeClass="active"
                offset={-70}
                smooth={true}
                duration={50}
                className="custom-nav-link"
              >
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-none d-lg-block d-flex ms-auto">
              <a
                href="https://api.whatsapp.com/send?phone=919007062180"
                target="_blank"
              >
                <Button className="btnCustom">Book Now</Button>
              </a>
            </div>
            <div className="d-lg-none d-flex justify-content-center w-100 mt-3">
              <a
                href="https://api.whatsapp.com/send?phone=919007062180"
                target="_blank"
              >
                <Button className="btnCustom">Book Now</Button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-fluid p-0">
        {/* <img src='/pool.jpg' className='img-fluid w-100 custom-img'/> */}
        {/* style={{ width: "100vw", height: "50vh", overflow: "hidden" }} */}
        <div className="position-relative">
          <img
            src="/home-slide.jpg"
            className="custom-img img-fluid"
            alt="Pool"
          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-center text-white"
            style={{
              backgroundColor: "rgba(0.5, 0.5, 0.5, 0.8)",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            <p
              className="font-bold"
              style={{ color: "white", fontStyle: "bolder", fontSize: "20px" }}
            >
              Simple - Unique - Friendly
            </p>
            <h3>
              Make Yourself At Home In Our{" "}
              <span style={{ color: "#e82574" }}> Guest House.</span>
            </h3>
          </div>
        </div>
        <div
          className="position-absolute start-50 translate-middle text-center text-white"
          style={{
            backgroundColor: "#e8edf0",
            padding: "20px 20px",
            borderRadius: "5px",
            width: "80%",
            zIndex:1
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=919007062180"
            target="_blank"
          >
            <Button
              style={{
                backgroundColor: "#ed5434",
                color: "white",
                borderColor: "#ed5434",
                zIndex: "1",
              }}
            >
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
