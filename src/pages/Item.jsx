import { useParams } from "react-router";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { Flex, Spinner } from "@chakra-ui/react";
import { useProductById } from "../hooks";

export const Item = () => {
  // useParams: hook que permite acceder a los parametros de la URL
  const { id } = useParams();
  const { productData, loading } = useProductById(id);

  return loading ? <Spinner /> : <ItemDetailContainer product={productData} />;
};