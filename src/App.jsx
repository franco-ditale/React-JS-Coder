import { ChakraProvider} from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {useEffect} from "react";
import { ProductsData } from "./data/productData";
function App() {
  //useEffect = hook que se ejecuta despues de que el componente se renderiza

  const myPromise = new Promise ((resolve,reject)=> {
    const number = 5;
    if (number===5){
      resolve("El numero es 5");
    }else{
      reject("El numero no es 5")
    }
  });
  
  return (
    <ChakraProvider>
      <Navbar/>
      <ItemListContainer greeting={"Hola Soy Franco Ditale. Esta es mi PreEntrega1."} products = {ProductsData}/>
    </ChakraProvider>
  );
}

export default App;