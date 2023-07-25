import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartitems = useSelector((state) => state.cart.items);
  console.log("cart", cartitems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{
            id,
            title: "Athi",
            quantity: 1,
            total: 20,
            price: 20,
          }}
        /> */}
        {cartitems.map((itm) => (
          <CartItem
            key={itm.id}
            item={{
              id: itm.id,
              title: itm.name,
              quantity: itm.quantity,
              total: itm.totalPrice,
              price: itm.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
