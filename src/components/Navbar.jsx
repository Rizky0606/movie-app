import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import SearchMovie from "../source/Movies/SearchMovie";

const NavbarWeb = () => {
  const navigate = useNavigate();

  const search = (q) => {
    const query = SearchMovie(q);
    console.log(query);
  };

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
              {/* Dropdown Movies */}
              <NavDropdown title="Movies" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/movie/now-playing">Now Playing</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/movie/popular-movies">Popular</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/movie/upcoming-movies">Upcoming</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/movie/trending-movies">Trending</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/movie/favorite-movie">Favorite</Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown Series */}
              <NavDropdown title="Series" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/series/popular-series">Popular</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/series/top-rated">Top Rated</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/series/on-the-air">On The Air</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Input
              color="white"
              w="30%"
              ml="30px"
              alignItems="end"
              placeholder="Cari Film Disini ..."
              onChange={({ target }) => search(target.value)}
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
