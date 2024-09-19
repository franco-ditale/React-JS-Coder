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
    <Box p={6}>
      <Grid
        templateColumns="repeat(4, 1fr)" 
        gap={6}
        justifyContent="center"
        alignItems="stretch" 
      >
        {products.map((product) => (
          <Card
            key={product.id}
            boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
            borderRadius="lg"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            }}
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            display="flex"
            flexDirection="column" 
            minH="100%" 
          >
            <CardBody flex="1">
              <Box
                display="flex"
                justifyContent="center" 
                alignItems="center" 
                h="200px" 
              >
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  objectFit="contain" 
                  maxH="100%" 
                  maxW="100%"
                />
              </Box>
              <Stack mt="6" spacing="3">
                <Heading size="md" color="white">
                  {product.title}
                </Heading>
                <Text color="gray.300" noOfLines={3}>
                  {product.description}
                </Text>
                <Text color="blue.300" fontSize="2xl" fontWeight="bold">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider opacity="0.2" />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link to={`/item/${product.id}`}>
                  <Button
                    bgGradient="linear(to-r, blue.400, blue.600)"
                    color="white"
                    _hover={{
                      bgGradient: "linear(to-r, blue.600, blue.800)",
                    }}
                    size="lg"
                  >
                    Ir a Detalle
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
