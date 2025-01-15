import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { LanguageContext } from "../../../context/language";
import { Form } from "react-bootstrap";
import { ProductContext } from "../../../context/cart";

const Header = () => {
  const { langType, lang, changeLang } = useContext(LanguageContext);
  const { cart } = useContext(ProductContext);

  return (
    <header
      className="bg-white shadow-sm position-fixed top-0 w-100 z-index-100"
      style={{ zIndex: 1050 }}
    >
      <nav className="container py-3 d-flex align-items-center justify-content-between">
        <Link to="/" className="fs-1 fw-bold text-primary text-decoration-none">
          {lang.logo}
        </Link>

        <ul className="m-0 d-flex gap-4 align-items-center list-unstyled">
          <li>
            <Link to="/" className="text-dark text-decoration-none">
              <FaHome size={24} title={lang.home} />
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-dark text-decoration-none">
              <AiFillProduct size={24} title={lang.products} />
            </Link>
          </li>
          <li className="position-relative">
            <Link to="/cart" className="text-dark text-decoration-none">
              <FaCartShopping size={24} title={lang.cart} />
              {cart.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  title={lang.cartItems}
                >
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/favorite" className="text-dark text-decoration-none">
              <MdFavorite size={24} title={lang.favorite} />
            </Link>
          </li>
          <li>
            <Form.Select
              value={langType}
              onChange={changeLang}
              className="form-select-sm border-secondary"
              aria-label={lang.languageSelection}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </Form.Select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
