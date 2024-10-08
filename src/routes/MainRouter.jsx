import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, Home, Item,   Checkout } from "../pages";
import { Navbar } from "../components";

export const MainRouter = () => {

  //Parametro de URL: es un dato dinamico que se puede pasar a una ruta
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};