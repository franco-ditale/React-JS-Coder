import {
  Box,
  Card,
  Grid,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box
      p={8}
      bgGradient="linear(to-r, teal.900, cyan.900, blue.800)"
      backgroundImage="url('https://www.transparenttextures.com/patterns/dark-matter.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minH="100vh"
    >
     
      <Grid templateColumns="repeat(4, 1fr)" gap={8} justifyContent="center" alignItems="stretch">
        {products.map((product) => (
          <Card
            key={product.id}
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.3)"
            borderRadius="lg"
            transition="transform 0.4s ease, box-shadow 0.4s ease"
            _hover={{ transform: "translateY(-12px)", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)" }}
            bgGradient="linear(to-r, teal.400, cyan.600)"
            display="flex"
            flexDirection="column"
            minH="100%"
            border="none"
          >
            <CardBody flex="1">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="200px"
                mb={4}
              >
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  objectFit="contain"
                  maxH="100%"
                  maxW="100%"
                  borderRadius="md"
                  boxShadow="lg"
                />
              </Box>
              <Stack mt="6" spacing="3" color="white">
                <Heading
                  size="md"
                  fontWeight="bold"
                  textAlign="center"
                  color="blue.50"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
                >
                  {product.title}
                </Heading>
                <Text
                  color="gray.200"
                  noOfLines={3}
                  textAlign="center"
                  textShadow="1px 2px 3px rgba(0, 0, 0, 0.7)"
                >
                  {product.description}
                </Text>
                <Text
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  textAlign="center"
                  textShadow="2px 2px 5px rgba(0, 0, 0, 0.8)"
                >
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider opacity="0.3" />
            <CardFooter justify="center">
              <ButtonGroup spacing="4">
                <Link to={`/item/${product.id}`}>
                  <Button
                    bg="black"
                    color="white"
                    _hover={{ bg: "white", color: "black", transform: "scale(1.05)" }}
                    size="lg"
                  >
                    Ver Detalles
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Box>




  );
};
