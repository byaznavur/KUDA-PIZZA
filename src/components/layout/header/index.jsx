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
    <header>
      <nav className="d-flex py-3 container align-items-center justify-content-between">
        <Link to="/" className="fs-1 fw-bold ">
          {lang.logo}
        </Link>

        <ul className="m-0 d-flex gap-3 align-items-center justify-content-between">
          <li>
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/products">
              <AiFillProduct />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaCartShopping />
              <span className="badge bg-danger">{cart.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/favorite">
              <MdFavorite />
            </Link>
          </li>
          <li>
            <Form.Select value={langType} onChange={changeLang}>
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
