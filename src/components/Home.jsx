import { useState } from "react";
import NavbarWeb from "./Navbar";
// import PaginationPages from "./PaginationPages";
import Carousel from "react-bootstrap/Carousel";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_AUTHORIZATION,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      setData(json.results);
      setLoading(false);
    });

  return (
    <>
      <NavbarWeb />

      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Carousel>
            <Carousel.Item interval={1000}>
              <Link to={`/detail-movies/${data[0].id}`}>
                <img
                  className="d-block w-100 height-50"
                  src={`https://image.tmdb.org/t/p/w780/${data[0].backdrop_path}`}
                  alt={data[0].title}
                />
                <Carousel.Caption>
                  <h3>{data[0].title}</h3>
                  <p>
                    <StarIcon boxSize={3} mr={2} />
                    {data[0].vote_average}
                  </p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <Link to={`/detail-movies/${data[1].id}`}>
                <img
                  className="d-block w-100 h-50"
                  src={`https://image.tmdb.org/t/p/w780/${data[1].backdrop_path}`}
                  alt={data[1].title}
                />
                <Carousel.Caption>
                  <h3>{data[1].title}</h3>
                  <p>
                    <StarIcon boxSize={3} mr={2} />
                    {data[1].vote_average}
                  </p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>

            <Carousel.Item>
              <Link to={`/detail-movies/${data[2].id}`}>
                <img
                  className="d-block w-100 h-50"
                  src={`https://image.tmdb.org/t/p/w780/${data[2].backdrop_path}`}
                  alt={data[2].title}
                />
                <Carousel.Caption>
                  <h3>{data[2].title}</h3>
                  <p>
                    <StarIcon boxSize={3} mr={2} />
                    {data[2].vote_average}
                  </p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          </Carousel>

          {/* <PaginationPages /> */}
        </>
      )}
    </>
  );
};

export default Home;
