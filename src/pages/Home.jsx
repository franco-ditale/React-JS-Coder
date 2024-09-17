import { Flex, Spinner , Box} from "@chakra-ui/react";
import { useProducts } from "../hooks";
import { ItemListContainer } from "../components";

export const Home = () => {
  const { productsData, loading, error } = useProducts();

  return loading ? (
    <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      <Spinner />
    </Flex>
  ) : error ? (
    <Box>
      Hay un error durante la carga de los productos, por favor contactese con
      soporte.
    </Box>
  ) : (
    <ItemListContainer products={productsData} />
  );
};