import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/CartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    // console.log("cart");
    dispatch(cartActions.cartHandler());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
