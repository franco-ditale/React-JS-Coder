import { useParams } from "react-router";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { useProductsById } from "../hooks";
import { Flex, Spinner } from "@chakra-ui/react";

export const Item = () => {
  // useParams: hook que permite acceder a los parametros de la URL
  const { id } = useParams();
  const { productData, loading } = useProductsById(id);

  return loading ? <Spinner /> : <ItemDetailContainer product={productData} />;
};