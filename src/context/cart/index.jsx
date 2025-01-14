import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "./../../data/products";
import { CART } from "../../constants";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(CART)) || []
  );

  const addToCart = (id) => {
    let product = products.find((product) => product.id === id);
    let productInCart = cart.find((product) => product.id === id);

    let newCart;

    if (productInCart) {
      newCart = cart.map((product) => {
        if (product.id === id) {
          product.quantity++;
        }
        return product;
      });
    } else {
      product.quantity = 1;

      newCart = [...cart, product];
    }

    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  const incQuantity = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity++;
      }
      return product;
    });
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };
  const decQuantity = (id) => {
    let newCart;
    const productInCart = cart.find((pr) => pr.id === id);
    if (productInCart.quantity > 1) {
      newCart = cart.map((product) => {
        if (product.id === id) {
          product.quantity--;
        }
        return product;
      });
    } else {
      newCart = cart.filter((pr) => pr.id !== id);
    }
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };
  const state = { cart, addToCart, incQuantity, decQuantity };
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node,
};
export default ProductProvider;
