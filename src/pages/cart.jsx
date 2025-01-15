import { useContext } from "react";
import { ProductContext } from "./../context/cart/index";
import CardCart from "../components/cards/CardCart";
const Cart = () => {
  const { cart, sumProductInCart } = useContext(ProductContext);
  return (
    <div className="container">
      <h2>Your cart</h2>

      {cart.map((pr, i) => (
        <CardCart {...pr} key={i} />
      ))}

      <button className="btn btn-warning">Check {sumProductInCart}$</button>
    </div>
  );
};

export default Cart;
