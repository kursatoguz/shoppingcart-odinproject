import { useProductsContext } from "../contexts/productscontext";
const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, title, price, image, amount } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = { id, title, price, image, amount };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "COUNT_CART_TOTALS") {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, total_items, total_amount };
  }
  if (action.type === "REMOVE_CART_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  //Sidebar
  if (action.type === "CLOSE_SIDE_BAR") {
    return { ...state, isSideBarOpen: false };
  }
  if (action.type === "OPEN_SIDE_BAR") {
    return { ...state, isSideBarOpen: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default cart_reducer;
