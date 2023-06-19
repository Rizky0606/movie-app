import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
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

const TopRated = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
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
            Top Rated Series
          </Text>
          <Container maxW="container.xl">
            <SimpleGrid
              justifyContent="space-between"
              columns={{ sm: 1, md: 2, lg: 3 }}
            >
              {data.map((series, index) => {
                return (
                  <Card maxW="sm" key={index} bg="gray.200" mt="20px">
                    <Image
                      src={`https://image.tmdb.org/t/p/w780/${series.poster_path}`}
                      alt={series.name}
                      borderRadius="lg"
                    />
                    <Stack p="10px" mt="6" spacing="3">
                      <Heading size="md">{series.name}</Heading>
                      <Text noOfLines={4}>{series.overview}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        <StarIcon boxSize={5} mr={2} />
                        {series.vote_average}
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
                          <Link to={`/series/detail-series/${series.id}`}>
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

export default TopRated;
