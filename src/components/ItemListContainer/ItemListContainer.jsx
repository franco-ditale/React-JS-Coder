import { Box, Card, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, CardBody, Center, SimpleGrid } from "@chakra-ui/react";
import { wrap } from "framer-motion";

const ItemListContainer = ({ greeting, products }) => {
  console.log(products);

  return <Box display={"Flex"} flexWrap={"wrap"} gap={"10px"} alignItems={"center"} justifyContent={"center"}> {
    products.map((product) => (

      <Card maxW='sm' key={product.id} marginTop={"10px"} align='center' w="100%">
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    ))
  }
  </Box>
};



{/* <Box
      width={"100vw"}
      height={"90vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={"20px"}
    >
      {
        products.map((productArray) => {
          return (
            <Box key={productArray.id}>
              <h1>{productArray.producto}</h1>
              <p>{productArray.descripcion}</p>
            </Box>

          )
        })
      }
    </Box> */}

export default ItemListContainer;