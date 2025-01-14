import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Layout from "./components/layout/index";
import Favorite from "./pages/favorite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
