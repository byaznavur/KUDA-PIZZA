import { Container } from "react-bootstrap";
import { categories } from "../data/categories";
import { products } from "../data/products";
import Pizza from "../components/cards/pizza";

const Home = () => {
  const pizzaProduct = products.filter(
    (product) => product.category === "Пицца"
  );

  return (
    <Container>
      <section className="d-flex flex-wrap justify-content-between gap-3">
        {categories.map((category, i) => {
          return (
            <div
              key={i}
              style={{
                width: "135px",
                height: "104px",
                borderRadius: "12px",
                border: "1px",
              }}
              className="bg-light d-flex align-items-center justify-content-center flex-column"
            >
              <img src={category.image} alt="jlk" />
              <p>{category.name}</p>
            </div>
          );
        })}
      </section>
      <section className="pizza">
        <h2>Пицца</h2>

        <div className="pizzaHerro row">
          {pizzaProduct.map((product, i) => (
            <div
              key={i}
              className="d-flex gap-3 col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <Pizza {...product} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;
