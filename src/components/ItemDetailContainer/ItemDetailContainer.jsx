import { useState, useContext } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
export const ItemDetailContainer = ({ product }) => {
  const [count, setCount] = useState(0);

  const { addItem, removeItem } = useContext(CartContext);

 

  const handleIncrement = () => {
    if (count < product.stock) {
      const newCount = count + 1;
      setCount(newCount);
      addItem(product, newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      removeItem(product);
    }
  };

  return (
    <Container
    maxW={"7xl"}
    bgGradient="linear(to-r, teal.800, cyan.800, blue.700)" // Gradiente un poco más suave
    marginTop={100}
    padding={6}
    borderRadius="lg"
    boxShadow="2xl"
  >
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 24 }}
    >
      <Flex justifyContent={"center"}>
        <Image
          rounded={"lg"}
          alt={"product image"}
          src={product.thumbnail}
          fit={"cover"}
          align={"center"}
          w={"80%"}
          h={{ base: "300px", sm: "350px", lg: "400px" }} // Imagen más pequeña
          boxShadow="2xl"
          border="2px solid rgba(255, 255, 255, 0.3)"
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }} color="white">
        <Box as={"header"}>
          <Heading
            lineHeight={1.2}
            fontWeight={700}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            color="blue.50"
            textShadow="3px 3px 6px rgba(0, 0, 0, 0.8)" // Sombra más pronunciada
          >
            {product.title}
          </Heading>
          <Text
            color="white"
            fontWeight={400}
            fontSize={"2xl"}
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.8)"
          >
            ${product.price} USD
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={<StackDivider borderColor="rgba(255, 255, 255, 0.2)" />}
        >
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
              color="gray.200"
              fontSize={"2xl"}
              fontWeight={"300"}
              textShadow="1px 1px 3px rgba(0, 0, 0, 0.6)"
            >
              {product.description}
            </Text>
          </VStack>
        </Stack>

          <Stack direction="row" spacing={4} align="center" mt={4}>
            <Button
              bg="red.500"
              color="white"
              _hover={{ bg: "red.600" }}
              onClick={handleDecrement}
            >
              -
            </Button>
            <Text fontSize="lg" color="black" bg="white" px={4} py={2} borderRadius="md">
              {count}
            </Text>
            <Button
              bg="green.500"
              color="white"
              _hover={{ bg: "green.600" }}
              onClick={handleIncrement}
            >
              +
            </Button>
          </Stack>
        
      </Stack>
    </SimpleGrid>
  </Container>

  );
};