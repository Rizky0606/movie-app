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
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import NavbarWeb from "../components/Navbar";

const SearchMovie = ({ keyword }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  if (keyword > 1) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.AUTHORIZATION,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        setLoading(false);
      })
      .catch((err) => console.error("error:" + err));
  } else {
    return <h1>Masukan Keyword Movie</h1>;
  }

  return (
    <>
      <NavbarWeb />
      {loading ? (
        <Spinner color="red.500" />
      ) : (
        <Container maxW="container.xl">
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
            {data.map((movie, index) => {
              return (
                <Card maxW="sm" key={index} bg="gray.200" mt="20px">
                  <CardBody>
                    <Image
                      src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                      alt={movie.title}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{movie.title}</Heading>
                      <Text noOfLines={4}>{movie.overview}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        <StarIcon boxSize={5} mr={2} />
                        {movie.vote_average}
                      </Text>
                    </Stack>
                  </CardBody>
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
                        <Link to={`/detail-movies/${movie.id}`}>Detail</Link>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};

export default SearchMovie;
