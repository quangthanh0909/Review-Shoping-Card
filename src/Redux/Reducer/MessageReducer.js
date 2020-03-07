import { WELCOM_SHOP } from "../Constants/Message";
import { CHANGE_MESSAGE } from "../Action/ActionType";

var initialState = WELCOM_SHOP;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
export default reducer;
