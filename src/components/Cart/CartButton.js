import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { UIActions } from "../../store/UISlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartquantity = useSelector((state) => state.cart.totalAmount);

  const showCartHandler = () => {
    // console.log("cart");
    dispatch(UIActions.cartHandler());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;
