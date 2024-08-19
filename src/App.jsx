import { useState } from "react";
import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//Estados: un valor que le podemos brindar a mi componente
//Hooks: funciones ya definidas por React que nos permiten realizar ciertas acciones en nuestros componentes. Por ejemplo crear un estado.
//useState: Hook que nos permite crear un estado en un componente funcional

function App() {
  //count: es el valor de mi estado
  //setCount: es la función que me permite actualizar el valor de mi estado
  const restar = () =>{
    if(count == 0){
      return
    }
    setCount (count - 1);
  };

  const sumar = () =>{
    setCount (count + 1);
  };

  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <Navbar/>
     {/*  <Flex>
        <Button onClick={restar} >-</Button>
        <Text>
          {count}
        </Text>
        <Button onClick={sumar}>+</Button>
      </Flex>

      <Flex>
       <ItemListContainer label="Mi nombre es franco"/>
      </Flex> */}
      <ItemListContainer greeting={"Hola Soy Franco"}/>
    </ChakraProvider>
  );
}

export default App;