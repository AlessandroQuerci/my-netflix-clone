import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import NetflixLogo from "../assets/image/netflix_logo_modified.png";
import NetflixAvatar from "../assets/image/avatar.png";
import { IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import DropdownButton from "react-bootstrap/DropdownButton";

const MyNavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="MyNavBar">
        <Container fluid className="px-5">
          <img src={NetflixLogo} alt="" className="Logo p-1" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-3">
              <Nav.Link className="text-secondary fs-nav" href="#home">
                Home
              </Nav.Link>
              <Nav.Link active className="text-white fs-nav" href="#tvshows">
                TV Shows
              </Nav.Link>
              <Nav.Link className="text-secondary fs-nav" href="#movies">
                Movies
              </Nav.Link>
              <Nav.Link className="text-secondary fs-nav" href="#recentlyAdded">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-secondary fs-nav" href="#myList">
                My List
              </Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-start align-items-center">
              <IoSearch className="text-white me-3" />
              <Nav.Link className="text-white fs-nav me-3" href="#kids">
                KIDS
              </Nav.Link>
              <GoBell className="text-white me-3" />
              {["start"].map((direction) => (
                <div className="d-flex ">
                  <img src={NetflixAvatar} alt="" className="NetflixAvatar" />
                  <DropdownButton key={direction} id={`dropdown-button-drop-${direction}`} drop={direction} variant="dark" data-bs-theme="dark" title="">
                    <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Subscriptions</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Change Account</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Settings</Dropdown.Item>
                  </DropdownButton>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
