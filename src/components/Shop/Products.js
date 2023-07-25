import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "Story Book",
    description: "Children Story Book",
  },
  {
    id: "p2",
    price: 5,
    title: "Novel",
    description: "Book for adult",
  },
  {
    id: "p3",
    price: 9,
    title: "Auto Biography",
    description: "Insipirational Story",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
