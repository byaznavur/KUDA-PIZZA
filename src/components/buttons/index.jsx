import { useContext } from "react";
import { ProductContext } from "./../../context/cart/index";
import PropTypes from "prop-types";

const Buttons = ({ id, quantity }) => {
  const { decQuantity, incQuantity } = useContext(ProductContext);
  return (
    <div>
      <button onClick={() => decQuantity(id)} className="btn btn-primary">
        -
      </button>
      <span className="btn btn-light">{quantity}</span>
      <button onClick={() => incQuantity(id)} className="btn btn-primary">
        +
      </button>
    </div>
  );
};

Buttons.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
};
export default Buttons;
