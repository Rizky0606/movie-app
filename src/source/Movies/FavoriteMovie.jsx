import { StarIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFavoriteMovie } from "../../redux/slices/movieFavorite";
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
import { Link } from "react-router-dom";

const FavoriteMovie = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleDeleteFavoriteMovie = (id) => {
    dispatch(deleteFavoriteMovie({ id }));
  };
  return (
    <>
      <NavbarWeb />
      {movies.length < 1 ? (
        <h1>Movie Favorite Tidak Tersedia</h1>
      ) : (
        <>
          <Text fontSize="2xl" align="center" pt="10px">
            Popular Movie
          </Text>
          <Container maxW="container.xl">
            <SimpleGrid
              justifyContent="space-between"
              columns={{ sm: 1, md: 2, lg: 3 }}
            >
              {movies.map((movie) => {
                return (
                  <Card maxW="sm" key={movie.id} bg="#63646D" mt="20px">
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
                        <Button
                          variant="solid"
                          colorScheme="red"
                          _hover={{
                            background: "white",
                            color: "red.600",
                          }}
                          onClick={() => handleDeleteFavoriteMovie(movie.id)}
                        >
                          Hapus
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

export default FavoriteMovie;
