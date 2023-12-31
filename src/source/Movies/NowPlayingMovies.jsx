import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import NavbarWeb from "../../components/Navbar";

const NowPlayingMovies = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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
    })
    .catch((err) => console.error("error:" + err));

  return (
    <>
      <NavbarWeb />
      {loading ? (
        <Spinner color="red.500" />
      ) : (
        <>
          <Text fontSize="2xl" align="center" pt="10px">
            Now Playing Movie
          </Text>
          <Container maxW="container.xl">
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
              {data.map((movie, index) => {
                return (
                  <Card maxW="sm" key={index} bg="#63646D" mt="20px">
                    <Image
                      src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                      alt={movie.title}
                      borderRadius="lg"
                    />
                    <Stack color="#eee" p="10px" mt="6" spacing="3">
                      <Heading size="md">{movie.title}</Heading>
                      <Text noOfLines={4}>{movie.overview}</Text>
                      <Text fontSize="2xl">
                        <StarIcon boxSize={5} mr={2} />
                        {movie.vote_average}
                      </Text>
                    </Stack>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Button
                          variant="solid"
                          colorScheme="blue"
                          _hover={{
                            background: "white",
                            color: "blue.600",
                          }}
                        >
                          <Link to={`/movie/detail-movies/${movie.id}`}>
                            Detail
                          </Link>
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Container>
        </>
      )}
    </>
  );
};

export default NowPlayingMovies;
