import { Flex, Spinner , Box} from "@chakra-ui/react";
import { useItemsCollection } from "../hooks";
import { ItemListContainer } from "../components";

export const Home = () => {
  const { items, loading, error } = useItemsCollection("products");

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
    <ItemListContainer products={items} />
  );
};