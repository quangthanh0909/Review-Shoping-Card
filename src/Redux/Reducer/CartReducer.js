import { ADD_CART, DELETE_ITEM, UPDATE_CART } from "../Action/ActionType";

var data = JSON.parse(localStorage.getItem("CART"));

var initialState = data ? data : [];

var findIndex = (cart, product) => {
  var result = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id ===product.product.id) {
        result = i;
        break;
      }
    }
  }
  return result;
};

const reducer = (state = initialState, action) => {
  var { product, quatity } = action;
  
  switch (action.type) {
    case ADD_CART:
      if (index >= -1) {
        var index = findIndex(state, product);
        state[index].quatity += quatity;
      } else {
        state.push({ product, quatity });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case DELETE_ITEM:
      if (index !== -1) {
        var index = findIndex(state, product);
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

      case UPDATE_CART:
      var index = findIndex(state, product);
      
      if (index != -1) {
        state[index].quatity = quatity;
      }
      return [...state];
    default:
      return state;
  }
};
export default reducer;
