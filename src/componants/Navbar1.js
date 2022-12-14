import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Modal1 from "./Modal";
import logo from "./logo.png";

function Navbar1({ getkeyword, search, data, AddMovie }) {
  const [keyword, setKeyword] = useState("");
  const handleSearch = () => {
    getkeyword(keyword);
    search(data);
  };

  return (
    <div className="mynav">
      <Navbar bg="transparant" expand="lg">
        <Container className="nav" fluid>
          <Navbar.Brand href="#" className="nav_title ">
            Movie Card
          </Navbar.Brand>
          <img className="logo" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="white" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="white" href="#action2">
                Movies
              </Nav.Link>
              <Nav.Link className="white" href="#action1">
                Tv Series
              </Nav.Link>
              <Nav.Link className="white" href="#action1">
                Contact
              </Nav.Link>
              <Nav.Link className="white" href="#action1">
                About
              </Nav.Link>
            </Nav>
            <div className="search_add">
              <Modal1 AddMovie={AddMovie} data={data} />
              <div className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button
                  className="btn_search"
                  onClick={handleSearch()}
                  variant="outline-success"
                >
                  Search
                </Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
