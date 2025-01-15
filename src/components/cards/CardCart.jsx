import PropTypes from "prop-types";
import Buttons from "../buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardCart = ({
  name,
  quantity,
  image,
  description,
  price,
  filter,
  id,
}) => {
  return (
    <div className="card mx-auto mb-4 shadow-sm" style={{ width: "18rem" }}>
      <LazyLoadImage
        effect="blur"
        wrapperProps={{
          style: { transitionDelay: "1s" },
        }}
        src={image}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{description}</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">
            Price: <strong>${price}</strong>
          </li>
          <li className="list-group-item">Category: {filter}</li>
          <li className="list-group-item">Quantity: {quantity}</li>
        </ul>
        <Buttons id={id} quantity={quantity} />
      </div>
    </div>
  );
};

CardCart.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  filter: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};

export default CardCart;
