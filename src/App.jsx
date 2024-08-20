import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <ChakraProvider>
      <Navbar/>
      <ItemListContainer greeting={"Hola Soy Franco Ditale. Esta es mi PreEntrega1."}/>
    </ChakraProvider>
  );
}

export default App;