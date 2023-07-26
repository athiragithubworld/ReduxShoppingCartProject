import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { UIActions } from "./store/UISlice";
import Notifications from "./components/UI/Notifications";

let intialState = true;
function App() {
  const showCart = useSelector((state) => state.uicart.showCart);
  const notification = useSelector((state) => state.uicart.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log("showcart", showCart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        UIActions.showErrorNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending data to cart...",
        })
      );
      const response = await fetch(
        "https://reactreduxproject-14615-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data to cart is failed");
      }
      dispatch(
        UIActions.showErrorNotification({
          status: "success",
          title: "Success",
          message: "Sent data to cart successfully..",
        })
      );

      const responseData = await response.json();
    };

    if (intialState) {
      intialState = false;
      return;
    }
    sendCartData().catch((error) => {
      console.log("err111", error);
      dispatch(
        UIActions.showErrorNotification({
          status: "error",
          title: "Error!",
          message: "Sending data to cart having error",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notifications
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
