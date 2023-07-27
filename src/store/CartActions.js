import { UIActions } from "./UISlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showErrorNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending data to cart...",
      })
    );
    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();
      dispatch(
        UIActions.showErrorNotification({
          status: "success",
          title: "Success",
          message: "Sent data to cart successfully..",
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showErrorNotification({
          status: "error",
          title: "Error!",
          message: "Sending data to cart having error",
        })
      );
    }
  };
};
