import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { ProductContext } from "../../context/cart";
import { useContext } from "react";

const Pizza = ({ name, image, description, price, filter, id }) => {
  const { addToCart, cart, incQuantity, decQuantity } =
    useContext(ProductContext);
  console.log(cart);

  let productInCart = cart.find((pr) => pr.id === id);
  return (
    <Card style={{ width: "18rem", position: "relative" }} className="mb-3">
      <span
        style={{ position: "absolute", width: "65px", top: "20px" }}
        className="badge bg-danger"
      >
        {filter}
      </span>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          {productInCart ? (
            <div>
              <button
                onClick={() => decQuantity(id)}
                className="btn btn-primary"
              >
                -
              </button>
              <span className="btn btn-light">{productInCart.quantity}</span>
              <button
                onClick={() => incQuantity(id)}
                className="btn btn-primary"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(id)}
              className="btn btn-primary m-0"
            >
              Add
            </button>
          )}
          <p className="btn m-0 btn-danger">{price}$</p>
        </div>
      </Card.Body>
    </Card>
  );
};

Pizza.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  filter: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default Pizza;
