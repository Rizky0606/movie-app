import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import SearchMovie from "../source/SearchMovie";

const NavbarWeb = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  SearchMovie(keyword);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Movie Apps</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/popular-movie">Popular</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/now-playing">Now Playing</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/upcoming">Upcoming</Link>
              </Nav.Link>
            </Nav>
            <Input
              color="white"
              w="30%"
              ml="30px"
              alignItems="end"
              placeholder="Cari Film Disini ..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Search2Icon
              color="white"
              boxSize={5}
              ml="10px"
              onClick={() => navigate("/search-movie")}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarWeb;
