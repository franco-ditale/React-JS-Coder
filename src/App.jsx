import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layout/MainLayout";
import { MainRouter } from "./routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;