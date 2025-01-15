import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { ProductContext } from "../../context/cart";
import { useContext } from "react";
import Buttons from "../buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Pizza = ({ name, image, description, price, filter, id }) => {
  const { addToCart, cart } = useContext(ProductContext);
  console.log(cart);

  let productInCart = cart.find((pr) => pr.id === id);
  return (
    <Card
      style={{ width: "18rem", position: "relative" }}
      className="mb-3 mx-auto"
    >
      <span
        style={{ position: "absolute", width: "65px", top: "20px" }}
        className="badge bg-danger"
      >
        {filter}
      </span>
      <LazyLoadImage
        effect="blur"
        variant="top"
        className="card-img-top"
        wrapperProps={{
          style: { transitionDelay: "1s" },
        }}
        src={image}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          {productInCart ? (
            <Buttons id={id} quantity={productInCart.quantity} />
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
