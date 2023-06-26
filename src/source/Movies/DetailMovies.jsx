import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { StarIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addFavoriteMovie } from "../../redux/slices/movieFavorite";
import {
  Card,
  Container,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import NavbarWeb from "../../components/Navbar";

const DetailMovies = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let genreList = [];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_AUTHORIZATION,
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`,
    options
  )
    .then((res) => res.json())
    .then((json) => {
      setData(json);
      setLoading(false);
    })
    .catch((err) => console.error("error:" + err));

  // const movieData = {
  //   id: params.id,
  //   title: data.title,
  //   popularity: data.popularity,
  //   voteAverage: data.vote_average,
  //   releaseDate: data.release_date,
  //   overview: data.overview,
  // };

  const handleClickFavorite = () => {
    <Alert status="success">
      <AlertIcon />
      Data uploaded to the server. Fire on!
    </Alert>;
    dispatch(addFavoriteMovie(data));
  };

  return (
    <>
      <NavbarWeb />
      {loading ? (
        <Spinner color="red.500" />
      ) : (
        <>
          <ChevronLeftIcon
            boxSize={10}
            cursor="pointer"
            _hover={{
              background: "black",
              color: "white",
              border: "1px solid black",
              borderRadius: "50%",
            }}
            m="20px"
            onClick={() => navigate(-1)}
          />
          <Container maxW="container.xl">
            <Card mt="20px">
              <CardBody>
                <Image
                  w="100%"
                  objectFit="cover"
                  src={`https://image.tmdb.org/t/p/w780/${data.backdrop_path}`}
                  alt={data.original_title}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{data.title}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    <StarIcon boxSize={5} mr={2} />
                    {data.vote_average}
                  </Text>
                  <Text>{data.popularity}</Text>
                  <Text>{data.release_date}</Text>
                  <Text>{data.overview}</Text>
                </Stack>
              </CardBody>
            </Card>
            <Button
              onClick={() => handleClickFavorite()}
              variant="outline"
              colorScheme="teal"
            >
              Tambah ke Favorite
            </Button>
          </Container>
        </>
      )}
    </>
  );
};

export default DetailMovies;
